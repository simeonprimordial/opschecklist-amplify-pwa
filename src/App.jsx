import { useEffect, useState } from 'react'
import './App.css'

const STORAGE_KEY = 'opschecklist-items'
const APP_VERSION = '1.0.1'

const starterItems = [
  {
    id: '1',
    text: 'Confirm monitoring dashboards',
    completed: false,
  },
  {
    id: '2',
    text: 'Review deployment status',
    completed: false,
  },
  {
    id: '3',
    text: 'Check outstanding incidents',
    completed: true,
  },
]

function App() {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem(STORAGE_KEY)

    if (!savedItems) {
      return starterItems
    }

    try {
      return JSON.parse(savedItems)
    } catch {
      return starterItems
    }
  })

  const [newItem, setNewItem] = useState('')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = (event) => {
    event.preventDefault()

    const trimmedItem = newItem.trim()

    if (!trimmedItem) return

    setItems((currentItems) => [
      ...currentItems,
      {
        id: `${Date.now()}`,
        text: trimmedItem,
        completed: false,
      },
    ])

    setNewItem('')
  }

  const toggleItem = (id) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item,
      ),
    )
  }

  const deleteItem = (id) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== id),
    )
  }

  const remainingItems =
    items.filter((item) => !item.completed).length

  return (
    <main className="app-shell">
      <section className="checklist-card">

        <header className="app-header">
          <div>
            <p className="eyebrow">
              AWS 80 Projects · Project 09
            </p>

            <h1>OpsChecklist</h1>

            <p className="subtitle">
              Lightweight operational checklist for cloud teams.
            </p>
          </div>

          <span className="status-badge">
            {remainingItems} open
          </span>
        </header>

        <form className="add-form" onSubmit={addItem}>
          <input
            type="text"
            value={newItem}
            onChange={(event) =>
              setNewItem(event.target.value)
            }
            placeholder="Add an operational task..."
          />

          <button type="submit">
            Add task
          </button>
        </form>

        <div className="list-header">
          <h2>Operational tasks</h2>
          <span>{items.length} total</span>
        </div>

        <ul className="checklist">
          {items.map((item) => (
            <li
              key={item.id}
              className={
                item.completed ? 'completed' : ''
              }
            >
              <label className="task-content">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() =>
                    toggleItem(item.id)
                  }
                />

                <span>{item.text}</span>
              </label>

              <button
                className="delete-button"
                type="button"
                onClick={() =>
                  deleteItem(item.id)
                }
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        {items.length === 0 && (
          <div className="empty-state">
            <p>No operational tasks.</p>
            <span>Add one above to begin.</span>
          </div>
        )}

        <footer className="app-footer">
          <span>
            Stored locally in this browser
          </span>

          <span>
            Version {APP_VERSION}
          </span>
        </footer>

      </section>
    </main>
  )
}

export default App