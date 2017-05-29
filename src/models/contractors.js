import http from 'axios';

export const load = (milesRadius = 50) => {
	return http.get('https://www.buildzoom.com/api/v1/search_contractors/san-francisco-ca/general-contractors?sort=relevance&page=1&radius=metro&keywords=General+Contractors&page_size=25&location_id=11101&mile_radius=' + milesRadius + '&search_type=filtered&location_state=CA')
}
