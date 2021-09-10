import './sign-up.css';
import Rules from '../../assets/regulamin_turnieju.pdf'

export function SignUp() {
  return (
    <div className="sing-up">
      <a className="sign-up-button"
         href="https://docs.google.com/spreadsheets/d/11xdiFehWg4WhMSg62Fc9fr05dn7u_BkuQbIAbIb32Ic/edit?pli=1#gid=0"
         target="_blank"
         rel="noreferrer">Zgłoś drużynę</a>
      <div className="bottom-buttons">
        <a className="secondary-button"
           href="https://challonge.com/pl/1zy318tv"
           target="_blank"
           rel="noreferrer">
          Tabela turniejowa
        </a>
        <a className="button-link"
           href={Rules}
           target="_blank"
           rel="noopener noreferrer">Regulamin rozgrywek</a>
      </div>
    </div>
  );
}