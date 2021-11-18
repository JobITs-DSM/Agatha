import { FC } from "react";
import * as M from "../styles";
 
const Region: FC = ():JSX.Element => {
    return ( 
        <M.Box>
            <M.FilterName>지역</M.FilterName>
            <M.Selection>
                <M.Option>전체</M.Option>
            </M.Selection>
        </M.Box>

     );
}
 
export default Region;