import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { supabase } from '../lib/supabase'
import { useWriteAuth } from '../hooks/useWriteAuth'
import './BucketList.css'

function formatDate(ts) {
  return new Date(ts).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric',
  })
}

export default function BucketList() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [newTitle, setNewTitle] = useState('')
  const [adding, setAdding] = useState(false)
  const [pwInput, setPwInput] = useState('')
  const { unlocked, unlock, error: authError } = useWriteAuth()

  useEffect(() => {
    async function fetchItems() {
      const { data, error } = await supabase
        .from('bucket_list')
        .select('*')
        .order('created_at', { ascending: true })
      if (!error) setItems(data)
      setLoading(false)
    }
    fetchItems()
  }, [])

  async function addItem(e) {
    e.preventDefault()
    if (!newTitle.trim()) return
    setAdding(true)
    const { data, error } = await supabase
      .from('bucket_list')
      .insert([{ title: newTitle.trim() }])
      .select()
    if (!error && data) {
      setItems(prev => [...prev, data[0]])
      setNewTitle('')
    }
    setAdding(false)
  }

  async function toggleItem(item) {
    if (!unlocked) return
    const patch = {
      completed: !item.completed,
      completed_at: !item.completed ? new Date().toISOString() : null,
    }
    const { error } = await supabase
      .from('bucket_list')
      .update(patch)
      .eq('id', item.id)
    if (!error) {
      setItems(prev => prev.map(i => i.id === item.id ? { ...i, ...patch } : i))
    }
  }

  const pending = items.filter(i => !i.completed)
  const done = items.filter(i => i.completed)

  return (
    <div className="bucket">
      <div className="bucket-hero">
        <span className="bucket-eyebrow">Adventures Ahead</span>
        <h1 className="bucket-title">Bucket List</h1>
        <div className="bucket-underline" />
        <p className="bucket-subtitle">
          {items.length === 0 ? 'Nothing yet' : `${done.length} of ${items.length} done`}
        </p>
      </div>

      <div className="bucket-body">
        {/* Write gate */}
        <div className="bucket-write">
          <AnimatePresence mode="wait">
            {!unlocked ? (
              <motion.form
                key="pw"
                className="bucket-gate"
                onSubmit={e => { e.preventDefault(); unlock(pwInput) }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <p className="bucket-gate-label">Enter the password to add or check off items</p>
                <div className="bucket-gate-row">
                  <input
                    type="password"
                    className="bucket-gate-input"
                    placeholder="Password"
                    value={pwInput}
                    onChange={e => setPwInput(e.target.value)}
                    autoComplete="current-password"
                  />
                  <button type="submit" className="bucket-gate-btn">Unlock</button>
                </div>
                {authError && <p className="bucket-error">{authError}</p>}
              </motion.form>
            ) : (
              <motion.form
                key="form"
                className="bucket-add-form"
                onSubmit={addItem}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <input
                  type="text"
                  className="bucket-add-input"
                  placeholder="Something to do together…"
                  value={newTitle}
                  onChange={e => setNewTitle(e.target.value)}
                />
                <button
                  type="submit"
                  className="bucket-add-btn"
                  disabled={adding || !newTitle.trim()}
                >
                  {adding ? '…' : '+ Add'}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* List */}
        {loading ? (
          <p className="bucket-state">Loading…</p>
        ) : (
          <div className="bucket-list">
            {items.length === 0 && (
              <p className="bucket-state">Nothing here yet. What do you want to do together?</p>
            )}

            <AnimatePresence>
              {pending.map(item => (
                <motion.div
                  key={item.id}
                  className="bucket-item"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  transition={{ duration: 0.3 }}
                  layout
                >
                  <button
                    className={`bucket-check ${!unlocked ? 'bucket-check--locked' : ''}`}
                    onClick={() => toggleItem(item)}
                    aria-label="Mark complete"
                    title={!unlocked ? 'Unlock to check off items' : ''}
                  >
                    <span className="bucket-check-box" />
                  </button>
                  <span className="bucket-item-title">{item.title}</span>
                </motion.div>
              ))}
            </AnimatePresence>

            {done.length > 0 && (
              <div className="bucket-done-section">
                <p className="bucket-done-divider">
                  <span>Completed</span>
                </p>
                <AnimatePresence>
                  {done.map(item => (
                    <motion.div
                      key={item.id}
                      className="bucket-item bucket-item--done"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      layout
                    >
                      <button
                        className={`bucket-check bucket-check--ticked ${!unlocked ? 'bucket-check--locked' : ''}`}
                        onClick={() => toggleItem(item)}
                        aria-label="Mark incomplete"
                      >
                        <span className="bucket-check-box">✓</span>
                      </button>
                      <span className="bucket-item-title bucket-item-title--done">{item.title}</span>
                      {item.completed_at && (
                        <span className="bucket-item-date">{formatDate(item.completed_at)}</span>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
