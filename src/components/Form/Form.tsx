import { ChangeEvent, FormEvent, useState } from 'react';
import { countries } from '../../data/countries';
import styles from './Form.module.css';
import { SearchType } from '../../interfaces/interface';
import Alert from '../Alert/Alert';

const Form = () => {
  const [search, setSearch] = useState<SearchType>({
    city: '',
    country: '',
  });

  const [alert, setAlert] = useState('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(search).includes('')) {
      setAlert('All the fields are required');
      return;
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {alert && <Alert>{alert}</Alert>}
      <div className={styles.field}>
        <label className={styles.label} htmlFor="city">
          City:
        </label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="city"
          value={search.city}
          onChange={handleChange}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="country">
          Country:
        </label>
        <select
          id="country"
          value={search.country}
          name="country"
          onChange={handleChange}
        >
          <option value="">--- Select Country ---</option>
          {countries.map(({ name, code }) => (
            <option key={code} value={code} className={styles.option}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <input className={styles.submit} type="submit" value="Check weather" />
    </form>
  );
};

export default Form;
