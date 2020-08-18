import Link from 'next/link'

const Navigation = () =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link href="/">
        <a className="navbar-brand">Home</a>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
              <Link href="/about">
             <a className="nav-link">About</a>
             </Link>
             <Link href="/services">
            <a className="nav-link">Services</a>
             </Link>
          </div>
        </div>
      </nav>
    )
}

export default Navigation
