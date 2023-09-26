import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {useRefresh} from "../../hooks/useRefresh"
import {getAllSiswaThunk} from "../../redux/user/thunk"
import {StyledContainer} from "../../style/components/StyledContainer"
import {StyledWrapper} from "../../style/components/StyledWrapper"
import {NavBarGuru} from "../partials/NavBarGuru"
import {TableRow} from "../partials/TableRow"
import {NavBarSiswa} from "../partials/NavBarSiswa"
import {StyledHeading} from "../../style/components/StyledHeading"
import {orange} from "../../style/ColorVariable"
import {avatars} from "../../assets/AvatarSvg"

export const Leaderboard = () => {
  // const role = localStorage.getItem('role');

  // const [token, tokenExp] = useRefresh(role);

  // const dispatch = useDispatch()

  // const [load, setLoad] = useState(true);

  // useEffect(() => {
  //     dispatch(getAllSiswaThunk(token, tokenExp))
  //     setLoad(false)
  // }, [dispatch])

  // const siswa = useSelector(state => state.user.siswalist);
  // const profil = useSelector(state => state.user.profil);
  const mainColor = ["#E52B17", "#EA5706", "#FF9961"]
  const accentColor = ["#FFFFFF", "#FFFFFF", "#FFFFFF"]
  const ordinal = ["st", "nd", "rd", "th", "th"]

  const profil = {
    nama_siswa: "User_Demo",
  }

  const siswa = [
    {
      nama_siswa: "User_Demo",
      point_siswa: 100,
      level_siswa: 1,
      avatarSvg: avatars[0].svg,
    },
    {
      nama_siswa: "John",
      point_siswa: 400,
      level_siswa: 5,
      avatarSvg: avatars[5].svg,
    },
    {
      nama_siswa: "Kylian",
      point_siswa: 450,
      level_siswa: 6,
      avatarSvg: avatars[2].svg,
    },
    {
      nama_siswa: "Strauss",
      point_siswa: 200,
      level_siswa: 6,
      avatarSvg: avatars[1].svg,
    },
    {
      nama_siswa: "Gauss",
      point_siswa: 600,
      level_siswa: 7,
      avatarSvg: avatars[7].svg,
    },
    {
      nama_siswa: "Peter",
      point_siswa: 100,
      level_siswa: 1,
      avatarSvg: avatars[10].svg,
    },
    {
      nama_siswa: "Stewie",
      point_siswa: 250,
      level_siswa: 2,
      avatarSvg: avatars[8].svg,
    },
    {
      nama_siswa: "Brian",
      point_siswa: 300,
      level_siswa: 5,
      avatarSvg: avatars[11].svg,
    },
    {
      nama_siswa: "Quagmire",
      point_siswa: 400,
      level_siswa: 4,
      avatarSvg: avatars[15].svg,
    },
    {
      nama_siswa: "Joe",
      point_siswa: 150,
      level_siswa: 2,
      avatarSvg: avatars[9].svg,
    },
  ]

  siswa.sort((a, b) => b.point_siswa - a.point_siswa)

  return (
    <StyledContainer flex='flex'>
      {/* {role === 'guru' ? <NavBarGuru /> : <NavBarSiswa />} */}
      <NavBarSiswa />
      <StyledWrapper>
        <div className='w-100'>
          <StyledHeading backgroundcolor={orange}>Leaderboard</StyledHeading>

          <div>
            <div className='m-t-10 flex flex-center flex-column'>
              <TableRow title={true} width='100%' />

              {/* {load && siswa.length < 0 ?

                                <div className='m-t-20 p-20-all flex flex-column flex-center'>
                                    <div className='borders p-20-all'></div>
                                    <h1 className='m-t-20'>Loading...</h1>
                                </div>

                                : */}

              {siswa.map((e, i) => {
                return (
                  <TableRow
                    currentName={profil.nama_siswa ? profil.nama_siswa : ""}
                    width='98%'
                    iterate={i}
                    backgroundcolor={mainColor[i]}
                    color={accentColor[i]}
                    ordinal={i < 5 ? ordinal[i] : "th"}
                    nama={e.nama_siswa}
                    avatar={e.avatarSvg}
                    level={e.level_siswa}
                    point={e.point_siswa}
                  />
                )
              })}

              {/* } */}
            </div>
          </div>
        </div>
      </StyledWrapper>
    </StyledContainer>
  )
}
