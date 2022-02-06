import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
import { ColorModeSwitcher } from './utils/ColorModeSwitcher'

const style = {
  wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex `,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: ` flex items-center justify-end`,
  headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer hidden md:inline-flex`,
  headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
}

function Header() {
  return (
    <Box className={style.wrapper}>
      <Link href="/">
        <Box className={style.logoContainer}>
          <Image src="/opensea.png" width="40" height="40" />
          <Text className={style.logoText}>OpenSea</Text>
        </Box>
      </Link>

      <Box className={style.searchBar}>
        <Box className={style.searchIcon}>
          <AiOutlineSearch />
        </Box>
        <input
          className={style.searchInput}
          placeholder="Search items, collections and accounts"
        />
      </Box>
      <Box className={style.headerItems}>
        <Link href="/collections/0x18f15E59a08769EfE90fF86bF41b5b3FDA090d91">
          <Box className={style.headerItem}>Collections</Box>
        </Link>
        <Box className={style.headerItem}>Stats</Box>
        <Box className={style.headerItem}>Resources</Box>
        <Box className={style.headerItem}>Create</Box>
        <Box className={style.headerIcon}>
          <CgProfile />
        </Box>
        <Box className={style.headerIcon}>
          <MdOutlineAccountBalanceWallet />
        </Box>
        <Box className={style.headerIcon}>
          <ColorModeSwitcher />
        </Box>
      </Box>
    </Box>
  )
}

export default Header
