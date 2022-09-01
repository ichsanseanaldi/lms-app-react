import React, { useEffect } from 'react'
import { useRefresh } from '../../hooks/useRefresh';
import { useDispatch, useSelector } from 'react-redux';
import { getProfilThunk, getCourseThunk, getBadgesThunk } from '../../redux/user/thunk';
import { StyledContainer } from '../../style/components/StyledContainer';
import { StyledWrapper } from '../../style/components/StyledWrapper';
import { StyledHeading } from '../../style/components/StyledHeading';
import { Card } from '../partials/Card';
import { green, magenta, pink, primary, purple, yellow } from '../../style/ColorVariable';
import { NavBarSiswa } from '../partials/NavBarSiswa';
import { LevelBar } from '../partials/LevelBar';
import { Link } from 'react-router-dom';

export const DashboardSiswa = () => {

    const dispatch = useDispatch()

    const [token, tokenExp] = useRefresh('siswa');
    const profil = useSelector(state => state.user.profil);
    const course = useSelector(state => state.user.course);
    const badges = useSelector(state => state.user.badges);

    useEffect(() => {

        dispatch(getProfilThunk(token, tokenExp, 'siswa'));
        dispatch(getCourseThunk(token, tokenExp));
        dispatch(getBadgesThunk(token, tokenExp));

    }, [dispatch])

    return (

        <StyledContainer flex="flex">
            <NavBarSiswa />
            <StyledWrapper>
                <StyledHeading backgroundcolor={primary}>
                    Dashboard
                </StyledHeading>
                <div>
                    {profil !== null &&
                        <div>
                            <div className='m-t-20'>
                                <div>
                                    <h2>Hi there!</h2>
                                </div>
                                <div>
                                    <p>Selamat datang di dashboard, kamu bisa melihat statistik mu dibawah!</p>
                                </div>
                            </div>
                            <div className='flex flex-column ava-container p-20-lr m-t-10'>
                                <div className='flex flex-center m-t-10 ava-wrapper '>
                                    <div className='m-t-10 p-10-all flex-only flex-center flex-column avatar-svg-wrap'>
                                        <div className='avatar-svg-dashboard' dangerouslySetInnerHTML={{ __html: profil.avatarSvg }} />
                                        <h3 className='m-t-10'>{profil.nama_siswa}</h3>
                                    </div>
                                    <div className='m-t-10 flex flex-column bar-wrap p-10-all'>
                                        <div className='flex-only flex-center-between-rev p-10-ub level-wrap caveat '>
                                            <h2>
                                                Level {profil.level_siswa}
                                            </h2>
                                            <h2>
                                                Level {isNaN(profil.level_siswa + 1) ? '' : profil.level_siswa + 1}
                                            </h2>
                                        </div>
                                        <div >
                                            <div className='bordered border-round'>
                                                <LevelBar
                                                    currentLevel={profil.level_siswa}
                                                    pointSiswa={profil.point_siswa}
                                                />
                                            </div>
                                        </div>
                                        <div className='text-center m-t-10 m-b-10 p-bar'>
                                            <p>Dapatkan Point dan Badges dengan menyelesaikan <strong>Materi</strong> atau <strong>Exercise!</strong></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex m-all-10'>
                                    <div className='flex flex-center'>
                                        {badges.length > 0 && badges.map(e => {
                                            return (
                                                <div className='p-10-all'>
                                                    <div className='badges-mini flex flex-center' dangerouslySetInnerHTML={{ __html: e.badge.badge_svg }} />
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className='text-center p-10-all badges-title'>
                                <h1>Statistics</h1>
                            </div>
                            <div className='flex flex-wrap flex-center m-t-10 p-20-lr course-wrapper '>
                                <Link to={'/course-list-siswa'}>
                                    <Card
                                        svg='<svg width="100" height="100" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M55.315 7.27996C56.7161 6.39168 58.341 5.92004 60 5.92004C61.659 5.92004 63.2838 6.39168 64.685 7.27996L106.6 33.86C107.845 34.6495 108.871 35.7409 109.582 37.0329C110.292 38.3248 110.665 39.7754 110.665 41.25C110.665 42.7245 110.292 44.1751 109.582 45.4671C108.871 46.759 107.845 47.8504 106.6 48.64L64.685 75.22C63.2838 76.1082 61.659 76.5799 60 76.5799C58.341 76.5799 56.7161 76.1082 55.315 75.22L13.4 48.64C12.1546 47.8504 11.129 46.759 10.4184 45.4671C9.70771 44.1751 9.33508 42.7245 9.33508 41.25C9.33508 39.7754 9.70771 38.3248 10.4184 37.0329C11.129 35.7409 12.1546 34.6495 13.4 33.86L55.315 7.27996V7.27996ZM60.67 13.615C60.4696 13.4878 60.2372 13.4202 60 13.4202C59.7627 13.4202 59.5303 13.4878 59.33 13.615L17.415 40.195C17.2374 40.3078 17.0911 40.4637 16.9898 40.6481C16.8885 40.8325 16.8354 41.0395 16.8354 41.25C16.8354 41.4604 16.8885 41.6674 16.9898 41.8518C17.0911 42.0362 17.2374 42.1921 17.415 42.305L59.33 68.885C59.5303 69.0122 59.7627 69.0797 60 69.0797C60.2372 69.0797 60.4696 69.0122 60.67 68.885L102.585 42.305C102.763 42.1921 102.909 42.0362 103.01 41.8518C103.111 41.6674 103.165 41.4604 103.165 41.25C103.165 41.0395 103.111 40.8325 103.01 40.6481C102.909 40.4637 102.763 40.3078 102.585 40.195L60.67 13.615V13.615Z" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.33504 61.62C9.59866 61.2041 9.94163 60.8441 10.3444 60.5607C10.7471 60.2772 11.2017 60.0759 11.6823 59.9682C12.1628 59.8605 12.6599 59.8485 13.1451 59.9329C13.6303 60.0173 14.0941 60.1964 14.51 60.46L59.33 88.885C59.5304 89.0122 59.7627 89.0797 60 89.0797C60.2373 89.0797 60.4697 89.0122 60.67 88.885L105.49 60.46C105.906 60.1961 106.37 60.0166 106.855 59.9319C107.341 59.8473 107.838 59.859 108.319 59.9665C108.799 60.074 109.254 60.2751 109.657 60.5584C110.06 60.8417 110.404 61.2016 110.668 61.6175C110.931 62.0335 111.111 62.4974 111.196 62.9827C111.28 63.468 111.269 63.9652 111.161 64.446C111.054 64.9268 110.852 65.3817 110.569 65.7847C110.286 66.1878 109.926 66.5311 109.51 66.795L64.685 95.22C63.2839 96.1083 61.659 96.5799 60 96.5799C58.341 96.5799 56.7162 96.1083 55.315 95.22L10.49 66.795C9.65077 66.2618 9.05763 65.4171 8.84104 64.4467C8.62445 63.4762 8.80214 62.4595 9.33504 61.62V61.62Z" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.33504 81.62C9.59866 81.2041 9.94163 80.8441 10.3444 80.5607C10.7471 80.2773 11.2017 80.0759 11.6823 79.9682C12.1628 79.8605 12.6599 79.8485 13.1451 79.9329C13.6303 80.0173 14.0941 80.1964 14.51 80.46L59.33 108.885C59.5304 109.012 59.7627 109.08 60 109.08C60.2373 109.08 60.4697 109.012 60.67 108.885L105.49 80.46C106.33 79.9269 107.348 79.7494 108.319 79.9665C109.289 80.1836 110.134 80.7775 110.668 81.6175C111.201 82.4576 111.378 83.475 111.161 84.446C110.944 85.417 110.35 86.2619 109.51 86.795L64.685 115.22C63.2839 116.108 61.659 116.58 60 116.58C58.341 116.58 56.7162 116.108 55.315 115.22L10.49 86.795C9.65077 86.2618 9.05763 85.4171 8.84104 84.4467C8.62445 83.4762 8.80214 82.4595 9.33504 81.62V81.62Z" fill="white"/>
                                    </svg>                                    
                                    '
                                        judul={'Course'}
                                        value={course[0] === '' ? 0 : course.length}
                                        bordercolor={primary}
                                        clickable={true}
                                    />
                                </Link>
                                <Link to={'/course-list-siswa'}>
                                    <Card
                                        svg='<svg width="100" height="90" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.7273 25.7143C21.5217 25.7143 20.3656 26.1658 19.5132 26.9695C18.6607 27.7733 18.1818 28.8634 18.1818 30C18.1818 31.1366 18.6607 32.2267 19.5132 33.0305C20.3656 33.8342 21.5217 34.2857 22.7273 34.2857V25.7143ZM40.9091 34.2857C42.1146 34.2857 43.2708 33.8342 44.1232 33.0305C44.9756 32.2267 45.4545 31.1366 45.4545 30C45.4545 28.8634 44.9756 27.7733 44.1232 26.9695C43.2708 26.1658 42.1146 25.7143 40.9091 25.7143V34.2857ZM22.7273 55.7143C21.5217 55.7143 20.3656 56.1658 19.5132 56.9695C18.6607 57.7733 18.1818 58.8634 18.1818 60C18.1818 61.1366 18.6607 62.2267 19.5132 63.0305C20.3656 63.8342 21.5217 64.2857 22.7273 64.2857V55.7143ZM77.2727 64.2857C78.4783 64.2857 79.6344 63.8342 80.4869 63.0305C81.3393 62.2267 81.8182 61.1366 81.8182 60C81.8182 58.8634 81.3393 57.7733 80.4869 56.9695C79.6344 56.1658 78.4783 55.7143 77.2727 55.7143V64.2857ZM22.7273 72.8571C21.5217 72.8571 20.3656 73.3087 19.5132 74.1124C18.6607 74.9161 18.1818 76.0062 18.1818 77.1429C18.1818 78.2795 18.6607 79.3696 19.5132 80.1733C20.3656 80.977 21.5217 81.4286 22.7273 81.4286V72.8571ZM77.2727 81.4286C78.4783 81.4286 79.6344 80.977 80.4869 80.1733C81.3393 79.3696 81.8182 78.2795 81.8182 77.1429C81.8182 76.0062 81.3393 74.9161 80.4869 74.1124C79.6344 73.3087 78.4783 72.8571 77.2727 72.8571V81.4286ZM22.7273 90C21.5217 90 20.3656 90.4515 19.5132 91.2553C18.6607 92.059 18.1818 93.1491 18.1818 94.2857C18.1818 95.4224 18.6607 96.5124 19.5132 97.3162C20.3656 98.1199 21.5217 98.5714 22.7273 98.5714V90ZM40.9091 98.5714C42.1146 98.5714 43.2708 98.1199 44.1232 97.3162C44.9756 96.5124 45.4545 95.4224 45.4545 94.2857C45.4545 93.1491 44.9756 92.059 44.1232 91.2553C43.2708 90.4515 42.1146 90 40.9091 90V98.5714ZM13.6364 8.57143H86.3636V0H13.6364V8.57143ZM90.9091 12.8571V107.143H100V12.8571H90.9091ZM86.3636 111.429H13.6364V120H86.3636V111.429ZM9.09091 107.143V12.8571H0V107.143H9.09091ZM13.6364 111.429C12.4308 111.429 11.2747 110.977 10.4222 110.173C9.5698 109.37 9.09091 108.279 9.09091 107.143H0C0 110.553 1.43668 113.823 3.994 116.234C6.55131 118.645 10.0198 120 13.6364 120V111.429ZM90.9091 107.143C90.9091 108.279 90.4302 109.37 89.5778 110.173C88.7253 110.977 87.5692 111.429 86.3636 111.429V120C89.9802 120 93.4487 118.645 96.006 116.234C98.5633 113.823 100 110.553 100 107.143H90.9091ZM86.3636 8.57143C87.5692 8.57143 88.7253 9.02296 89.5778 9.82669C90.4302 10.6304 90.9091 11.7205 90.9091 12.8571H100C100 9.44722 98.5633 6.17695 96.006 3.76577C93.4487 1.35459 89.9802 0 86.3636 0V8.57143ZM13.6364 0C10.0198 0 6.55131 1.35459 3.994 3.76577C1.43668 6.17695 0 9.44722 0 12.8571H9.09091C9.09091 11.7205 9.5698 10.6304 10.4222 9.82669C11.2747 9.02296 12.4308 8.57143 13.6364 8.57143V0ZM22.7273 34.2857H40.9091V25.7143H22.7273V34.2857ZM22.7273 64.2857H77.2727V55.7143H22.7273V64.2857ZM22.7273 81.4286H77.2727V72.8571H22.7273V81.4286ZM22.7273 98.5714H40.9091V90H22.7273V98.5714Z" fill="white"/>
                                    <path d="M77.2727 32.1429C78.5279 32.1429 79.5455 31.1835 79.5455 30C79.5455 28.8166 78.5279 27.8572 77.2727 27.8572C76.0175 27.8572 75 28.8166 75 30C75 31.1835 76.0175 32.1429 77.2727 32.1429Z" fill="white" stroke="white"/>
                                    </svg>
                                    '
                                        judul='Materi'
                                        value={profil.materi_finished}
                                        bordercolor={magenta}
                                        clickable={true}
                                    />
                                </Link>
                                <Link to={'/course-list-siswa'}>
                                    <Card
                                        svg='<svg width="100" height="110" viewBox="0 0 120 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M100 30.5556C100 28.1244 101.054 25.7929 102.929 24.0738C104.804 22.3547 107.348 21.3889 110 21.3889C112.652 21.3889 115.196 22.3547 117.071 24.0738C118.946 25.7929 120 28.1244 120 30.5556V92.5925L110 106.343L100 92.5925V30.5556ZM110 27.5C109.116 27.5 108.268 27.822 107.643 28.395C107.018 28.968 106.667 29.7452 106.667 30.5556V90.7409L110 95.3242L113.333 90.7409V30.5556C113.333 29.7452 112.982 28.968 112.357 28.395C111.732 27.822 110.884 27.5 110 27.5Z" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M116.667 42.7778H103.333V36.6667H116.667V42.7778ZM13.3333 6.11111C11.5652 6.11111 9.86953 6.75496 8.61929 7.90102C7.36905 9.04707 6.66667 10.6015 6.66667 12.2222V97.7778C6.66667 99.3985 7.36905 100.953 8.61929 102.099C9.86953 103.245 11.5652 103.889 13.3333 103.889H80C81.7681 103.889 83.4638 103.245 84.714 102.099C85.9643 100.953 86.6667 99.3985 86.6667 97.7778V12.2222C86.6667 10.6015 85.9643 9.04707 84.714 7.90102C83.4638 6.75496 81.7681 6.11111 80 6.11111H13.3333ZM0 12.2222C0 8.98069 1.40476 5.87192 3.90524 3.57981C6.40573 1.28769 9.79711 0 13.3333 0H80C83.5362 0 86.9276 1.28769 89.4281 3.57981C91.9286 5.87192 93.3333 8.98069 93.3333 12.2222V97.7778C93.3333 101.019 91.9286 104.128 89.4281 106.42C86.9276 108.712 83.5362 110 80 110H13.3333C9.79711 110 6.40573 108.712 3.90524 106.42C1.40476 104.128 0 101.019 0 97.7778V12.2222Z" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M46.6667 27.5001C46.6667 26.6898 47.0178 25.9126 47.643 25.3395C48.2681 24.7665 49.1159 24.4446 50 24.4446H76.6667C77.5507 24.4446 78.3986 24.7665 79.0237 25.3395C79.6488 25.9126 80 26.6898 80 27.5001C80 28.3105 79.6488 29.0877 79.0237 29.6607C78.3986 30.2338 77.5507 30.5557 76.6667 30.5557H50C49.1159 30.5557 48.2681 30.2338 47.643 29.6607C47.0178 29.0877 46.6667 28.3105 46.6667 27.5001ZM46.6667 39.7224C46.6667 38.912 47.0178 38.1348 47.643 37.5618C48.2681 36.9887 49.1159 36.6668 50 36.6668H76.6667C77.5507 36.6668 78.3986 36.9887 79.0237 37.5618C79.6488 38.1348 80 38.912 80 39.7224C80 40.5327 79.6488 41.3099 79.0237 41.883C78.3986 42.456 77.5507 42.7779 76.6667 42.7779H50C49.1159 42.7779 48.2681 42.456 47.643 41.883C47.0178 41.3099 46.6667 40.5327 46.6667 39.7224ZM46.6667 67.2224C46.6667 66.412 47.0178 65.6348 47.643 65.0618C48.2681 64.4887 49.1159 64.1668 50 64.1668H76.6667C77.5507 64.1668 78.3986 64.4887 79.0237 65.0618C79.6488 65.6348 80 66.412 80 67.2224C80 68.0327 79.6488 68.8099 79.0237 69.383C78.3986 69.956 77.5507 70.2779 76.6667 70.2779H50C49.1159 70.2779 48.2681 69.956 47.643 69.383C47.0178 68.8099 46.6667 68.0327 46.6667 67.2224ZM46.6667 79.4446C46.6667 78.6342 47.0178 77.857 47.643 77.284C48.2681 76.7109 49.1159 76.389 50 76.389H76.6667C77.5507 76.389 78.3986 76.7109 79.0237 77.284C79.6488 77.857 80 78.6342 80 79.4446C80 80.255 79.6488 81.0322 79.0237 81.6052C78.3986 82.1782 77.5507 82.5001 76.6667 82.5001H50C49.1159 82.5001 48.2681 82.1782 47.643 81.6052C47.0178 81.0322 46.6667 80.255 46.6667 79.4446ZM20 67.2224V76.389H30V67.2224H20ZM16.6667 61.1112H33.3333C34.2174 61.1112 35.0652 61.4332 35.6903 62.0062C36.3155 62.5792 36.6667 63.3564 36.6667 64.1668V79.4446C36.6667 80.255 36.3155 81.0322 35.6903 81.6052C35.0652 82.1782 34.2174 82.5001 33.3333 82.5001H16.6667C15.7826 82.5001 14.9348 82.1782 14.3096 81.6052C13.6845 81.0322 13.3333 80.255 13.3333 79.4446V64.1668C13.3333 63.3564 13.6845 62.5792 14.3096 62.0062C14.9348 61.4332 15.7826 61.1112 16.6667 61.1112V61.1112ZM39.0233 25.3399C39.6482 25.9129 39.9993 26.6899 39.9993 27.5001C39.9993 28.3104 39.6482 29.0874 39.0233 29.6604L23.3333 44.0429L14.31 35.7715C13.9916 35.4897 13.7377 35.1525 13.563 34.7797C13.3883 34.4069 13.2963 34.006 13.2925 33.6002C13.2886 33.1945 13.373 32.7922 13.5406 32.4167C13.7082 32.0412 13.9557 31.7 14.2687 31.4131C14.5816 31.1262 14.9538 30.8993 15.3635 30.7457C15.7731 30.592 16.2121 30.5147 16.6547 30.5183C17.0973 30.5218 17.5347 30.6061 17.9413 30.7662C18.348 30.9264 18.7158 31.1591 19.0233 31.451L23.3333 35.4018L34.31 25.3399C34.9351 24.767 35.7828 24.4452 36.6667 24.4452C37.5505 24.4452 38.3982 24.767 39.0233 25.3399V25.3399Z" fill="white"/>
                                    </svg>'
                                        judul='Exercise'
                                        value={profil.exercise_finished}
                                        bordercolor={yellow}
                                        clickable={true}
                                    />
                                </Link>
                                <Link to={'/badges'}>
                                    <Card
                                        svg='<svg width="70" height="110" viewBox="0 0 79 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M54.0928 51.1141L74.1666 4.66663L54.0928 51.1141ZM27.4066 52.1426L4.16663 4.66663L27.4066 52.1426ZM45.9566 48.9306L24.8166 4.66663L45.9566 48.9306ZM54.5666 4.66663L48.9666 18.4166L54.5666 4.66663ZM9.55124 81.6666C9.55124 90.4188 12.9551 98.8125 19.0139 105.001C25.0728 111.19 33.2904 114.667 41.8589 114.667C50.4275 114.667 58.6451 111.19 64.7039 105.001C70.7628 98.8125 74.1666 90.4188 74.1666 81.6666C74.1666 72.9145 70.7628 64.5208 64.7039 58.3321C58.6451 52.1434 50.4275 48.6666 41.8589 48.6666C33.2904 48.6666 25.0728 52.1434 19.0139 58.3321C12.9551 64.5208 9.55124 72.9145 9.55124 81.6666V81.6666Z" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    
                                    '
                                        judul={badges.length > 1 ? 'Badges' : 'Badge'}
                                        value={badges.length}
                                        bordercolor={pink}
                                        clickable={true}
                                    />
                                </Link>
                                <Card
                                    svg='<svg width="100" height="90" viewBox="0 0 121 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M120.75 110.5H86.4643V0.5H120.75V110.5ZM95.0357 102.038H112.179V8.96154H95.0357V102.038ZM77.8929 110.5H43.6071V34.3462H77.8929V110.5ZM52.1786 102.038H69.3214V42.8077H52.1786V102.038ZM35.0357 110.5H0.75V59.7308H35.0357V110.5ZM9.32143 102.038H26.4643V68.1923H9.32143V102.038Z" fill="white"/>
                                    </svg>
                                    '
                                    judul='Level'
                                    value={profil.level_siswa}
                                    bordercolor={purple}
                                />
                                <Card
                                    svg='<svg width="100" height="100" viewBox="0 0 111 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M109.917 41.3483C109.391 39.6475 108.424 38.1315 107.123 36.9682C105.822 35.8049 104.237 35.0396 102.544 34.7572L75.9816 30.2574L63.668 5.31524C62.8836 3.72737 61.6949 2.3954 60.2321 1.46547C58.7693 0.535536 57.089 0.0435791 55.3756 0.0435791C53.6622 0.0435791 51.9819 0.535536 50.5191 1.46547C49.0564 2.3954 47.8676 3.72737 47.0832 5.31524L34.7696 30.2574L8.20762 34.7572C6.51652 35.0441 4.93392 35.811 3.63345 36.9738C2.33298 38.1365 1.3649 39.6502 0.835435 41.3488C0.305966 43.0473 0.235565 44.865 0.631958 46.6025C1.02835 48.34 1.87622 49.9302 3.08254 51.1984L22.0346 71.1132L17.9325 98.8362C17.6693 100.602 17.8784 102.409 18.5367 104.059C19.1951 105.709 20.2772 107.138 21.6641 108.188C23.051 109.238 24.6889 109.87 26.3977 110.012C28.1065 110.155 29.82 109.804 31.3498 108.998L55.3756 96.3633L79.4021 108.998C80.932 109.802 82.645 110.152 84.3532 110.009C86.0613 109.865 87.6985 109.234 89.0849 108.184C90.4713 107.134 91.5533 105.706 92.2121 104.057C92.8709 102.408 93.081 100.602 92.8194 98.8362L88.7173 71.1132L107.669 51.1984C108.879 49.9326 109.73 48.3425 110.127 46.604C110.523 44.8655 110.451 43.0465 109.917 41.3483V41.3483ZM102.462 45.8153L80.9048 68.4679L85.5715 100.002C85.6294 100.38 85.5858 100.767 85.4456 101.12C85.3054 101.474 85.0741 101.78 84.7772 102.004C84.4804 102.229 84.1297 102.364 83.7639 102.394C83.3981 102.423 83.0316 102.347 82.7049 102.173L55.3756 87.8017L28.0461 102.174C27.7194 102.348 27.3529 102.424 26.9871 102.394C26.6213 102.364 26.2706 102.23 25.9738 102.005C25.6769 101.78 25.4456 101.474 25.3054 101.121C25.1652 100.767 25.1216 100.38 25.1795 100.003L29.8464 68.4679L8.28897 45.8151C8.03153 45.544 7.85064 45.2042 7.76612 44.8331C7.6816 44.4619 7.69671 44.0737 7.80979 43.7109C7.92287 43.3481 8.12956 43.0248 8.40721 42.7763C8.68487 42.5278 9.02278 42.3637 9.38393 42.3021L39.5975 37.1839L53.6039 8.81312C53.7714 8.47376 54.0254 8.18906 54.3379 7.99029C54.6504 7.79152 55.0095 7.68636 55.3756 7.68636C55.7417 7.68636 56.1008 7.79152 56.4133 7.99029C56.7258 8.18906 56.9798 8.47376 57.1473 8.81312L71.1537 37.1839L101.367 42.3021C101.728 42.3637 102.066 42.5278 102.344 42.7763C102.622 43.0248 102.828 43.3481 102.941 43.7109C103.054 44.0737 103.07 44.4619 102.985 44.8331C102.901 45.2042 102.72 45.544 102.462 45.8151L102.462 45.8153Z" fill="white"/>
                                    </svg>
                                    '
                                    judul='Point'
                                    value={profil.point_siswa}
                                    bordercolor={green}
                                />
                            </div>
                        </div>
                    }
                </div>
            </StyledWrapper>
        </StyledContainer>




    )
}