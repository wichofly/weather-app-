import { useForm, SubmitHandler } from 'react-hook-form';
import { countries } from '../../data/countries';
import styles from './Form.module.css';
import { SearchType } from '../../interfaces/interface';

interface FormProps {
  fetchWeather: (search: SearchType) => Promise<void>;
}

const Form = ({ fetchWeather }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchType>();

  const onSubmit: SubmitHandler<SearchType> = (data) => {
    fetchWeather(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="city">
          City:
        </label>
        <input
          type="text"
          id="city"
          placeholder="city"
          {...register('city', { required: 'City is required' })}
        />
        {errors.city && (
          <span className={styles.error}>{errors.city.message}</span>
        )}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="country">
          Country:
        </label>
        <select
          id="country"
          {...register('country', { required: 'Country is required' })}
        >
          <option value="">--- Select Country ---</option>
          {countries.map(({ name, code }) => (
            <option key={code} value={code} className={styles.option}>
              {name}
            </option>
          ))}
        </select>
        {errors.country && (
          <span className={styles.error}>{errors.country.message}</span>
        )}
      </div>

      <input className={styles.submit} type="submit" value="Check weather" />
    </form>
  );
};

export default Form;
