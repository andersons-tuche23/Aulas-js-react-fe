import React from "react";

export default function Header({ texto, image }) {
    return (

        <header>{texto}
            {image &&
                <>
                    <a href="https://i0.wp.com/hitsite.com.br/wp-content/uploads/2023/04/Demon-Slayer-1200x675-1.jpg?resize=768%2C432&ssl=1">link1</a>
                    <a href="https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/06/Attack-on-Titan-Erens-10-Best-Powers.png?q=50&fit=contain&w=1140&h=&dpr=1.5">link2</a>
                </>
            }
        </header>)
}
