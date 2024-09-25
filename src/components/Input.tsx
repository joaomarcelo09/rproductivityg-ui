
import { FunctionComponent } from "react"

 

interface dataProps{
  labels?: "";
  value: '';
}

const Input: FunctionComponent<dataProps> = (dataProps) => {

    return(
   
      <div >
        <div >
              <label htmlFor="first-name">
                {dataProps.labels}
              </label>
        </div>

              <div >
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  color="blue"
                  autoComplete="given-name"
                  value={dataProps.value}
                />
          </div>
        </div>

    
   
    )
  };
  export default Input

