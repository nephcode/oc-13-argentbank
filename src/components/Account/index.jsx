// IMPORT MODULES ==============================================//

// IMPORT MODULES ==============================================//
import scssAccount from "./account.module.scss";

// IMPORT JSON ================================================//
import accountData from "./account_fr.json";

// ACCOUNT COMPONENT ===========================================//
const Account = () => (
  <section>
    {accountData.map((account) => (
      <article
        key={account.id}
        data-id={account.id}
        className={scssAccount.account}
      >
        <div className={scssAccount.accountWrapper}>
          <h3 className={scssAccount.accountTitle}>{account.account}</h3>
          <p className={scssAccount.accountAmount}>{account.amount}</p>
          <p className={scssAccount.accountDescription}>Solde Disponible</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className={scssAccount.transaction}>
            Voir l&apos;opération
          </button>
        </div>
      </article>
    ))}
  </section>
);
export default Account;
// End of Account component ===================================//
