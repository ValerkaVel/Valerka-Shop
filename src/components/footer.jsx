function Footer(){
    return <footer className ="page-footer pink lighten-3">
        <div className="footer-copyright">
            <div className="container black-text">
                ©  {new Date().getFullYear()} Сайт разработан умничкой / Логвиновой Валерией ТКБО-01-22
                <a className="black-text right" href="#!">Посмотреть репозиторий</a>
            </div>
        </div>
    </footer>
}

export {Footer};