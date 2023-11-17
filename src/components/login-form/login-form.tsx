import { ChangeEvent, FormEvent, useState } from 'react';
import { TAuthData } from '../../types';
import { useAppDispatch } from '../../hooks';
import { postAuth } from '../../store';

const validateEmail = (email: string): boolean =>
  /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(email);

const validatePassword = (password: string): boolean =>
  /^(?=.*\d)(?=(.*\W){1})(?=.*[a-zA-Z])(?!.*\s).{3,}$/.test(password);

const validate = (formData: TAuthData): boolean => {
  if (!validateEmail(formData.email)) {
    return false;
  }

  if (!validatePassword(formData.password)) {
    return false;
  }

  return true;
};

function LoginForm() {
  const [isOk, setIsOk] = useState(false);
  const [formData, setFormData] = useState<TAuthData>({
    email: '',
    password: '',
  });
  const dispatch = useAppDispatch();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (validate({ ...formData, [name]: value })) {
      setIsOk(true);
    } else {
      setIsOk(false);
    }
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (validate(formData)) {
      dispatch(
        postAuth({
          email: formData.email,
          password: formData.password,
        })
      );
    }
  };

  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <form
        onSubmit={handleFormSubmit}
        className="login__form form"
        action="#"
        method="post"
      >
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input
            onChange={handleInputChange}
            value={formData.email}
            className="login__input form__input"
            type="email"
            name="email"
            placeholder="Email"
            title="Email, for example test@test.com"
            required
          />
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input
            onChange={handleInputChange}
            value={formData.password}
            className="login__input form__input"
            type="password"
            name="password"
            placeholder="Password"
            title="The password must contain at least one digit or letter"
            required
          />
        </div>
        <button
          className="login__submit form__submit button"
          type="submit"
          disabled={!isOk}
        >
          Sign in
        </button>
      </form>
    </section>
  );
}

export { LoginForm };
