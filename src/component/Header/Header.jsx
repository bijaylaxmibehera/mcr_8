import "./Header.css";

export function Header() {
  return (
    <>
      <nav>
        <div className="logo">Meetups</div>
        <div className="search-bar">
          <span className="search-logo">
            {" "}
            <i class="fa fa-search" aria-hidden="true"></i>
          </span>
          <input type="text" placeholder="Search by title and time" />
        </div>
      </nav>
      <hr />
    </>
  );
}
