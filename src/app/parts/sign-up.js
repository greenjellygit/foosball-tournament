import './sign-up.css';

export function SignUp() {
  return (
    <div className="sing-up">
      <div className="sign-up-button">Zgłoś drużynę</div>
      <div className="bottom-buttons">
        <a className="secondary-button"
           href="https://challonge.com/pl/t12zlvxc"
           target="_blank"
           rel="noreferrer">
          Tabela turniejowa
        </a>
        <div className="button-link">Regulamin rozgrywek</div>
      </div>
    </div>
  );
}