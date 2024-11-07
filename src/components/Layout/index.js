import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'

const Layout = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="page-content">
        <span className="tags top-tags">
          <span className="tag-html">&lt;html&gt;</span>
          <br />
          &lt;body&gt;
        </span>
        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="tag-html">&lt;/html&gt;</span>
        </span>
      </main>
    </div>
  )
}

export default Layout
