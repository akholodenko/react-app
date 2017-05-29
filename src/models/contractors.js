import http from 'axios';

export const load = () => http.get('https://www.buildzoom.com/api/v1/search_contractors/san-francisco-ca/general-contractors?sort=relevance&page=1&radius=metro&keywords=General+Contractors&page_size=25&location_id=11101&mile_radius=50&search_type=filtered&location_state=CA')
