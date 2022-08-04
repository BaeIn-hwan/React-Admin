import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getStorage, removeStorage, setStorage } from '@/composables/storage';

import CInput from '@/components/form/CInput';
import CButton from '@/components/form/CButton';
import CCheckbox from '@/components/form/CCheckbox';
import { InputError } from '@/styled/CInput';
import { InputClearBtn } from '@/styled/CButton';

import styles from '@/assets/scss/modules/login.module.scss';

const Login = () => {
  const navigator = useNavigate();

  const id = useRef() as MutableRefObject<HTMLInputElement>;
  const pw = useRef() as MutableRefObject<HTMLInputElement>;

  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const [errorId, setErrorId] = useState<string | undefined>('');
  const [errorPw, setErrorPw] = useState<string | undefined>('');

  const [saveId, setSaveId] = useState<boolean>(false);

  const isValidation = (): boolean => {
    let isPass = true;
    const blankCheck = [
      {
        target: userId,
        errorTarget: setErrorId,
        errorMsg: '아이디를 입력해주세요.',
      },
      {
        target: userPw,
        errorTarget: setErrorPw,
        errorMsg: '비밀번호를 입력해주세요.',
      },
    ];

    for (let i = 0, maxCount = blankCheck.length; i < maxCount; i++) {
      if (blankCheck[i].target === '') {
        blankCheck[i].errorTarget(blankCheck[i].errorMsg);
        isPass = false;
      } else {
        blankCheck[i].errorTarget('');
      }
    }

    return isPass;
  };

  const requestLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      if (!isValidation()) {
        return;
      }

      const response = await LoginSample({
        id: userId,
        pw: userPw,
      });

      if (response && response.status) {
        saveId
          ? setStorage('local', 'idSave', userId)
          : removeStorage('local', 'idSave');

        setStorage('session', 'userToken', {
          userKey: response.userKey,
        });

        navigator('/', { replace: true });
      } else {
        setErrorPw(response.message);
      }
    } catch (err) {
      console.error('RequestLogin Error.. ', err);
    }
  };

  // 샘플 api
  const LoginSample = ({
    id,
    pw,
  }: {
    id: string;
    pw: string;
  }): { status?: number; userKey?: number; message?: string } => {
    if (id === 'admin' && pw === 'admin') {
      return { status: 200, userKey: 1234 };
    } else {
      return { message: '아이디 또는 비밀번호가 올바르지 않습니다.' };
    }
  };

  const isSaveId = () => {
    const getId = getStorage('local', 'idSave');

    if (getId) {
      setSaveId(true);
      setUserId(getId);
    }
  };

  useEffect(() => {
    isSaveId();
  }, []);

  return (
    <div className={styles['login']}>
      <article className={styles['login__wrapper']}>
        <h1 className={styles['login__title']}>Login</h1>

        <form className={styles['login-form']} onSubmit={requestLogin}>
          <fieldset>
            <legend>로그인</legend>

            <div className={styles['login-form__row']}>
              <CInput
                type="text"
                placeholder="ID"
                target={id}
                model={userId}
                maxLength={10}
                styles={{ height: '46px' }}
                _input={(val: string) => setUserId(val)}
              />

              {userId && userId.length && (
                <CButton
                  type="button"
                  target={InputClearBtn}
                  _click={(e: any) => {
                    setUserId('');
                    id.current?.focus();
                  }}
                >
                  <>
                    <i></i>
                    <span className="blind">삭제</span>
                  </>
                </CButton>
              )}
            </div>
            {errorId !== '' && <InputError>{errorId}</InputError>}

            <div className={styles['login-form__row']}>
              <CInput
                type="password"
                placeholder="PASSWORD"
                target={pw}
                model={userPw}
                maxLength={12}
                styles={{ height: '46px' }}
                _change={(val: string) => setUserPw(val)}
              />

              {userPw && userPw.length && (
                <CButton
                  type="button"
                  target={InputClearBtn}
                  _click={(e: any) => {
                    setUserPw('');
                    pw.current?.focus();
                  }}
                >
                  <>
                    <i></i>
                    <span className="blind">삭제</span>
                  </>
                </CButton>
              )}
            </div>
            {errorPw !== '' && <InputError>{errorPw}</InputError>}

            <div
              className={`${styles['login-form__row']} ${styles['login-form__row--check']}`}
            >
              <CCheckbox
                label="아이디 저장"
                checked={saveId}
                _change={(flag: boolean) => {
                  setSaveId(flag);
                }}
              />
            </div>

            <div
              className={`${styles['login-form__row']} ${styles['login-form__row--btn']}`}
            >
              <CButton type="submit" classess={styles['login-form__btn']}>
                Sign In
              </CButton>
            </div>
          </fieldset>
        </form>

        <img src={require('@/assets/images/common/ico_check.svg')} alt="" />
      </article>
    </div>
  );
};

export default Login;
