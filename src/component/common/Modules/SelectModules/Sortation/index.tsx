import { FC } from "react";
import * as M from "../styles";
 
const Sortation: FC = ():JSX.Element => {
    return ( 
        <M.Box>
            <M.FilterName>구분</M.FilterName>
            <M.Selection>
                <M.Option>
                    2021
                </M.Option>
            </M.Selection>
        </M.Box>
     );
}
 
export default Sortation;