import metamaskimg from '../assets/metamask.png';
import coinbaseimg from '../assets/coinbase-logo.png';
import walletconnectimg from '../assets/walletconnect.png';
import formnaticimg from '../assets/formnatic.png';
import HiveIcon from '@mui/icons-material/Hive';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import AppsIcon from '@mui/icons-material/Apps';
import DnsIcon from '@mui/icons-material/Dns';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import { Column, createData } from '../types';


export const OPENDRAWER = 'OPENDRAWER'
export const CardTile = [
    {
        img: 'https://lh3.googleusercontent.com/PSHKxSMSaOZGiEfUuG8aOOGrtG3H5jpwIaZyYoCkutidCq4-jdifdFANNsWNJkOe2YlkSdD4g0J5OsLTptLUahV-VFevnNB4DPQB=w600',
        title: 'Tulipa Nodatus',
        desp: 'Like many flowers, Tulipa Nodatus is monoecious, meaning that it has both male and female reproductive organs in the same individual'
    },
    {
        img: 'https://lh3.googleusercontent.com/BbJRW4zVCteV4n21A_EyeIwQoensudgqZbkQMaRh2eEwT6sJjzf_2REHEvhkWSwkloHSI_VafMixQaO2wn9hPcSDAugG0n32UUrmpyg=w600',
        title: 'Tulipa Nodatus',
        desp: 'Like many flowers, Tulipa Nodatus is monoecious, meaning that it has both male and female reproductive organs in the same individual'
    },
    {
        img: 'https://lh3.googleusercontent.com/PSHKxSMSaOZGiEfUuG8aOOGrtG3H5jpwIaZyYoCkutidCq4-jdifdFANNsWNJkOe2YlkSdD4g0J5OsLTptLUahV-VFevnNB4DPQB=w600',
        title: 'Tulipa Nodatus',
        desp: 'Like many flowers, Tulipa Nodatus is monoecious, meaning that it has both male and female reproductive organs in the same individual'
    }
]

export const marketplace = [
    { name: "ALL NFT's" },
    { name: "Art" },
    { name: "Collections" },
    { name: "Collectibles" },
    { name: "Domain Name" },
    { name: "Music" },
    { name: "Photograps" },
    { name: "Sports" },
    { name: "Trading Cards" },
    { name: "Utility" },
    { name: "Virtual Words" },
]

export const myaccount = [
    { name: 'Profile' },
    { name: 'Favorites' },
    { name: 'Watchlist' },
    { name: 'My collections' },
    { name: 'Settings' },
    { name: '' },
]

export const stats = [
    { name: 'Rankings' },
    { name: 'Activity' },
]

export const resources = [
    { name: 'Help Center' },
    { name: 'Platform Status' },
    { name: 'Partners' },
    { name: 'Gas-Free Marketplace' },
    { name: 'Taxes' },
    { name: 'Blogs' },
    { name: 'Docs' },
    { name: 'Newsletter' },
];

export const company = [
    { name: 'About' },
    { name: 'Careers' },
    { name: 'Ventures' },
    { name: 'Grants' },
]

export const wallets = [
    {
        name: 'MetaMask',
        img: metamaskimg
    },
    {
        name: 'CoinBase Wallet',
        img: coinbaseimg
    },
    {
        name: 'WalletConnect',
        img: walletconnectimg
    },
    {
        name: 'Fortmatic',
        img: formnaticimg,
    },
]

export const explore = [
    {
        icon: <HiveIcon />,
        name: 'ALL NFT'
    },
    {
        icon: <BubbleChartIcon />,
        name: 'Art'
    },
    {
        icon: <AppsIcon />,
        name: 'Collectibles'
    },
    {
        icon: <DnsIcon />,
        name: 'Domain Name'
    },
    {
        icon: <MusicNoteIcon />,
        name: 'Music'
    },
    {
        icon: <AddAPhotoIcon />,
        name: 'Photography'
    },
    {
        icon: <SportsKabaddiIcon />,
        name: 'Sports'
    }
]

export const COLUMNS: readonly Column[] = [
    { id: 'collection', label: 'Collection', minWidth: 170 },
    { id: 'volume', label: 'Volume', minWidth: 100 },
    {
        id: '24',
        label: '24h%',
        minWidth: 170,
    },
    {
        id: '7',
        label: '7d %',
        minWidth: 170,

    },
    {
        id: 'floorprice',
        label: 'Floor Price',
        minWidth: 170,

    },
    {
        id: 'owners',
        label: 'Owners',
        minWidth: 170,

    },
    {
        id: 'items',
        label: 'Items',
        minWidth: 170,
    },
];

export const ROWS = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
];