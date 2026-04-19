import React, { useMemo } from "react";
import "./AnniversaryWidget.css";

// Set the date when your relationship started
const START_DATE = new Date(2024, 2, 24); // 24 March 2024 (months are 0-based)

const weekdayFormatter = new Intl.DateTimeFormat("en-GB", {
  weekday: "long"
});

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric"
});

function getNextAnniversaries(count = 5) {
  const anniversaries = [];
  const today = new Date();

  for (let i = 1; i <= count; i++) {
    const year = START_DATE.getFullYear() + i;
    const anniversary = new Date(
      year,
      START_DATE.getMonth(),
      START_DATE.getDate()
    );

    if (anniversary >= today) {
      anniversaries.push({
        number: i,
        date: anniversary,
        weekday: weekdayFormatter.format(anniversary),
        formatted: dateFormatter.format(anniversary)
      });
    }
  }

  return anniversaries;
}

export default function AnniversaryWidget() {
  const upcoming = useMemo(() => getNextAnniversaries(5), []);

  if (upcoming.length === 0) return null;

  return (
    <section className="anniversary-widget">
      <h2 className="anniversary-title">
        When will our next anniversaries be?
      </h2>
      <p className="anniversary-subtitle">
        Relationship start date:{" "}
        <strong>{dateFormatter.format(START_DATE)}</strong>
      </p>
      <div className="anniversary-list">
        {upcoming.map((item) => (
          <div key={item.number} className="anniversary-card">
            <div className="anniversary-number">
              {item.number}
              <span className="anniversary-suffix">
                {item.number === 1 ? "st" : item.number === 2 ? "nd" : "th"}
              </span>
            </div>
            <div className="anniversary-details">
              <div className="anniversary-weekday">{item.weekday}</div>
              <div className="anniversary-date">{item.formatted}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

