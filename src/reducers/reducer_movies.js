import { FETCH_DATA } from "../actions/index";

const initialState = [{"page":1,"total_results":183,"total_pages":10,"results":[{"vote_count":3206,"id":9738,"video":false,"vote_average":5.6,"title":"Fantastic Four","popularity":18.365081,"poster_path":"\/aJwUBmUA11lkNVSJ3if3h3xHSFd.jpg","original_language":"en","original_title":"Fantastic Four","genre_ids":[28,12,14,878],"backdrop_path":"\/2yBWCL0RPJ6Av8LWxcrhuMRlZyG.jpg","adult":false,"overview":"During a space voyage, four scientists are altered by cosmic rays: Reed Richards gains the ability to stretch his body; Sue Storm can become invisible; Johnny Storm controls fire; and Ben Grimm is turned into a super-strong … thing. Together, these \"Fantastic Four\" must now thwart the evil plans of Dr. Doom and save the world from certain destruction.","release_date":"2005-06-29"}]}]

export default function(state=initialState, action) {
    switch(action.type){
        case (FETCH_DATA):
            return [action.payload.data]
            
        default:
            return state
    }
}

