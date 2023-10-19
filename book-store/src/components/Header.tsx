import './Header.module.css'

export function Header() {
    return (
        <header className='header'>
            <nav>
                <a href="#">Book Store</a>
                <div>
                    <input type="text" />
                    <button type="submit">
                        Pesquisar
                    </button>
                </div>
            </nav>      
        </header>
    )
}


