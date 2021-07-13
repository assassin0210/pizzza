import ContentLoader from "react-content-loader";
import React from "react";


function PizzaLoadingBlock() {
    return (

        <ContentLoader
            className="pizza-block"
            speed={2}
            width={280}
            height={457}
            viewBox="0 0 280 457"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="125" cy="113" r="112" />
            <rect x="1" y="238" rx="6" ry="6" width="271" height="35" />
            <rect x="3" y="283" rx="6" ry="6" width="267" height="90" />
            <rect x="5" y="387" rx="6" ry="6" width="77" height="35" />
            <rect x="131" y="385" rx="20" ry="20" width="133" height="49" />
        </ContentLoader>
    )

}
export default PizzaLoadingBlock;
