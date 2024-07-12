import { ClipLoader } from "react-spinners"
import '../SASS/Loading.scss'

const Loading = () => {
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      };
  return (
    <div className="loading">
        <ClipLoader
        color={'white'}
        loading={true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        className="clip"
      />
    </div>
  )
}

export default Loading