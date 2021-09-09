import './bottom-content.css';

export function BottomContent() {
  return (
    <div className="bottom-content">
      <div className="body">
        <div>
          Serdecznie zapraszamy na turniej piłkarzyków stołowych, który odbędzie się 30 września o godzinie
          17:00 w biurze Omnipack.
          Weź udział w zabawie jeśli jesteś amatorem, profesjonalistą lub po prostu chcesz pokibicować.
        </div>
        <div className="we-provide-section">
          <div>
            <div>Zapewniamy:</div>
            <div>
              <span className="red">●</span> solidną dawkę emocji
            </div>
            <div>
              <span className="red">●</span> napoje chłodzące
            </div>
            <div>
              <span className="red">●</span> napoje rozgrzewające
            </div>
            <div>
              <span className="red">●</span> puchar Mistrzów Omnipack dla zwycięzców
            </div>
          </div>
          <div className="contact-form">
            <div>Kontakt: </div>
            <div>edyta.malesa@omnipack.com</div>
            <div>krzysztof.antczak@omnipack.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}
