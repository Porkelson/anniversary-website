import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { supabase } from '../lib/supabase'
import { useWriteAuth } from '../hooks/useWriteAuth'
import './Journal.css'

const AUTHORS = ['Olek', 'Faustyna']

function formatDate(ts) {
  return new Date(ts).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  })
}

export default function Journal() {
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(true)
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('Olek')
  const [submitting, setSubmitting] = useState(false)
  const [pwInput, setPwInput] = useState('')
  const { unlocked, unlock, error: authError } = useWriteAuth()

  useEffect(() => {
    async function fetchEntries() {
      const { data, error } = await supabase
        .from('journal_entries')
        .select('*')
        .order('created_at', { ascending: false })
      if (!error) setEntries(data)
      setLoading(false)
    }
    fetchEntries()
  }, [])

  async function addEntry(e) {
    e.preventDefault()
    if (!content.trim()) return
    setSubmitting(true)
    const { data, error } = await supabase
      .from('journal_entries')
      .insert([{ content: content.trim(), author }])
      .select()
    if (!error && data) {
      setEntries(prev => [data[0], ...prev])
      setContent('')
    }
    setSubmitting(false)
  }

  return (
    <div className="journal">
      <div className="journal-hero">
        <span className="journal-eyebrow">Our Story</span>
        <h1 className="journal-title">Journal</h1>
        <div className="journal-underline" />
        <p className="journal-subtitle">Little moments worth remembering</p>
      </div>

      <div className="journal-body">
        {/* Write section */}
        <div className="journal-write">
          <AnimatePresence mode="wait">
            {!unlocked ? (
              <motion.form
                key="pw"
                className="journal-gate"
                onSubmit={e => { e.preventDefault(); unlock(pwInput) }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <p className="journal-gate-label">Enter the password to post</p>
                <div className="journal-gate-row">
                  <input
                    type="password"
                    className="journal-gate-input"
                    placeholder="Password"
                    value={pwInput}
                    onChange={e => setPwInput(e.target.value)}
                    autoComplete="current-password"
                  />
                  <button type="submit" className="journal-gate-btn">Unlock</button>
                </div>
                {authError && <p className="journal-error">{authError}</p>}
              </motion.form>
            ) : (
              <motion.form
                key="form"
                className="journal-form"
                onSubmit={addEntry}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="journal-author-row">
                  <span className="journal-author-label">Posting as</span>
                  <div className="journal-author-btns">
                    {AUTHORS.map(a => (
                      <button
                        key={a}
                        type="button"
                        className={`journal-author-btn ${author === a ? 'active' : ''}`}
                        onClick={() => setAuthor(a)}
                      >
                        {a}
                      </button>
                    ))}
                  </div>
                </div>
                <textarea
                  className="journal-textarea"
                  placeholder="What's on your mind today?"
                  value={content}
                  onChange={e => setContent(e.target.value)}
                  rows={4}
                />
                <div className="journal-form-footer">
                  <span className="journal-char-hint">{content.length > 0 ? `${content.length} characters` : ''}</span>
                  <button
                    type="submit"
                    className="journal-submit"
                    disabled={submitting || !content.trim()}
                  >
                    {submitting ? 'Posting…' : 'Add entry →'}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Feed */}
        <div className="journal-feed">
          {loading ? (
            <p className="journal-state">Loading entries…</p>
          ) : entries.length === 0 ? (
            <p className="journal-state">No entries yet. Write the first one.</p>
          ) : (
            <AnimatePresence initial={false}>
              {entries.map((entry, i) => (
                <motion.article
                  key={entry.id}
                  className={`journal-entry journal-entry--${entry.author.toLowerCase()}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i < 5 ? i * 0.06 : 0 }}
                >
                  <header className="journal-entry-header">
                    <span className="journal-entry-author">{entry.author}</span>
                    <time className="journal-entry-date">{formatDate(entry.created_at)}</time>
                  </header>
                  <p className="journal-entry-content">{entry.content}</p>
                </motion.article>
              ))}
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  )
}
