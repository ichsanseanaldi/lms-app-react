import React, { useEffect, useState } from 'react'
import { useRefresh } from '../../hooks/useRefresh';
import { useDispatch, useSelector } from 'react-redux';
import { getProfilThunk, getCourseThunk } from '../../redux/user/thunk';
import { StyledContainer } from '../../style/components/StyledContainer';
import { StyledWrapper } from '../../style/components/StyledWrapper';
import { StyledHeading } from '../../style/components/StyledHeading';
import { NavBarGuru } from '../partials/NavBarGuru';
import { Card } from '../partials/Card';
import { grey, primary } from '../../style/ColorVariable';
import { Modal } from '../partials/Modal';

export const DashboardGuru = () => {

  const dispatch = useDispatch()

  const role = localStorage.getItem('role')

  const [token, tokenExp] = useRefresh(role);
  const profil = useSelector(state => state.user.profil);
  const course = useSelector(state => state.user.course);
  const [load, setLoad] = useState(false)

  useEffect(() => {
    setLoad(true)
    dispatch(getProfilThunk(token, tokenExp, role));
    dispatch(getCourseThunk(token, tokenExp));
    setLoad(false)
  }, [dispatch])

  return (

    <StyledContainer flex="flex">
      <NavBarGuru />
      <StyledWrapper>
        <StyledHeading backgroundcolor={primary}>
          Dashboard Guru
        </StyledHeading>
        <div className='m-t-20'>
          <div>
            <h2>Hi there, {profil !== null && profil.nama_guru}!</h2>
          </div>
          <div>
            <p>Selamat datang di dashboard, kamu bisa melihat statistik mu dibawah!</p>
          </div>
        </div>
        <div className='flex flex-wrap m-t-20 p-20-lr course-wrapper'>
          <Card
            svg='<svg width="100" height="100" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M59.9246 7.27999C61.4425 6.39171 63.2027 5.92007 65 5.92007C66.7972 5.92007 68.5575 6.39171 70.0754 7.27999L115.483 33.86C116.832 34.6495 117.944 35.7409 118.713 37.0329C119.483 38.3249 119.887 39.7755 119.887 41.25C119.887 42.7245 119.483 44.1751 118.713 45.4671C117.944 46.759 116.832 47.8505 115.483 48.64L70.0754 75.22C68.5575 76.1083 66.7972 76.5799 65 76.5799C63.2027 76.5799 61.4425 76.1083 59.9246 75.22L14.5167 48.64C13.1675 47.8505 12.0565 46.759 11.2866 45.4671C10.5167 44.1751 10.113 42.7245 10.113 41.25C10.113 39.7755 10.5167 38.3249 11.2866 37.0329C12.0565 35.7409 13.1675 34.6495 14.5167 33.86L59.9246 7.27999ZM65.7258 13.615C65.5088 13.4878 65.257 13.4203 65 13.4203C64.7429 13.4203 64.4912 13.4878 64.2742 13.615L18.8662 40.195C18.6738 40.3078 18.5154 40.4637 18.4057 40.6481C18.2959 40.8326 18.2384 41.0396 18.2384 41.25C18.2384 41.4604 18.2959 41.6674 18.4057 41.8519C18.5154 42.0363 18.6738 42.1921 18.8662 42.305L64.2742 68.885C64.4912 69.0122 64.7429 69.0797 65 69.0797C65.257 69.0797 65.5088 69.0122 65.7258 68.885L111.134 42.305C111.326 42.1921 111.485 42.0363 111.594 41.8519C111.704 41.6674 111.762 41.4604 111.762 41.25C111.762 41.0396 111.704 40.8326 111.594 40.6481C111.485 40.4637 111.326 40.3078 111.134 40.195L65.7258 13.615Z" fill="black"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M10.113 61.62C10.3985 61.204 10.7701 60.8441 11.2064 60.5606C11.6427 60.2772 12.1352 60.0759 12.6558 59.9682C13.1764 59.8605 13.7149 59.8485 14.2405 59.9329C14.7661 60.0172 15.2686 60.1964 15.7192 60.46L64.2742 88.885C64.4912 89.0122 64.743 89.0797 65 89.0797C65.2571 89.0797 65.5089 89.0122 65.7259 88.885L114.281 60.46C114.731 60.196 115.234 60.0166 115.76 59.9319C116.286 59.8472 116.824 59.859 117.345 59.9665C117.866 60.0739 118.359 60.2751 118.795 60.5584C119.232 60.8416 119.604 61.2015 119.89 61.6175C120.176 62.0335 120.37 62.4973 120.462 62.9827C120.554 63.468 120.541 63.9652 120.425 64.446C120.308 64.9268 120.09 65.3817 119.783 65.7847C119.476 66.1877 119.087 66.531 118.636 66.795L70.0755 95.22C68.5575 96.1083 66.7973 96.5799 65 96.5799C63.2028 96.5799 61.4426 96.1083 59.9246 95.22L11.3642 66.795C10.455 66.2618 9.81243 65.4171 9.57779 64.4466C9.34315 63.4762 9.53565 62.4595 10.113 61.62Z" fill="black"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M10.113 81.62C10.3985 81.204 10.7701 80.8441 11.2064 80.5606C11.6427 80.2772 12.1352 80.0759 12.6558 79.9682C13.1764 79.8605 13.7149 79.8485 14.2405 79.9329C14.7661 80.0172 15.2686 80.1964 15.7192 80.46L64.2742 108.885C64.4912 109.012 64.743 109.08 65 109.08C65.2571 109.08 65.5089 109.012 65.7259 108.885L114.281 80.46C115.191 79.9269 116.293 79.7494 117.345 79.9665C118.397 80.1835 119.312 80.7774 119.89 81.6175C120.467 82.4576 120.66 83.475 120.425 84.446C120.189 85.4169 119.546 86.2619 118.636 86.795L70.0755 115.22C68.5575 116.108 66.7973 116.58 65 116.58C63.2028 116.58 61.4426 116.108 59.9246 115.22L11.3642 86.795C10.455 86.2618 9.81243 85.4171 9.57779 84.4467C9.34315 83.4762 9.53565 82.4595 10.113 81.62Z" fill="black"/>
            </svg>
            '
            judul='Course'
            value={course[0] === '' ? 0 : course.length}
            bordercolor={primary}
          />
          <Card bordercolor={grey} />
          <Card bordercolor={grey} />
        </div>
        {
          load &&

          <Modal
            load={true}
          />

        }
      </StyledWrapper>
    </StyledContainer>


  )
}