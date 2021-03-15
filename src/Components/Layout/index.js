import React from "react";
import s from './style.module.css';


const Layout = ({title, descr, urlBg, colorBg}) => {

    return (
        <section
            style={{
                backgroundColor: colorBg || 'none',
                backgroundImage: urlBg ? `url(${urlBg})` : 'none'
            }}
            className={s.root}>
            <div
                className={s.wrapper}>
                <article>
                    <div className={s.title}>{(title && <h3>{title}</h3>)}

                        <span className={s.separator}/>
                    </div>
                    <div className={`${s.desc} ${s.full}`}>
                        {(descr && <p>{descr}</p>)}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout