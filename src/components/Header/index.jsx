import logo from '../../../public/logo-goldifbra.svg';

export function Header() {
    return (
        <header className="h-[100px] flex items-center px-[150px] bg-slate-600">
            <img src={logo} />
        </header>
    )
}