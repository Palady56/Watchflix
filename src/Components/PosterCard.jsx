
export default function PosterCard(props) {

    const { movie, index, handler } = props;

    return (
        <div className="mb-2" onClick={()=>{ handler(index) }}>
            <div className=''>
                <img className='mx-auto' src={'https://image.tmdb.org/t/p/w220_and_h330_face'+ movie.poster_path} alt=''/>
                <div className='text-center'>{movie.title}</div>
            </div>
        </div>
    )
}