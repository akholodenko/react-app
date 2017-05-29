import http from 'axios';

const apiUrl = 'https://www.buildzoom.com/api/v1/search_contractors/';

export const load = (filters = {}) => {
	console.log('filters', filters);
	return http.get(`${apiUrl}san-francisco-ca/general-contractors?
		sort=${filters.sort || 'relevance'}
		&page=${filters.page}
		&radius=metro&keywords=General+Contractors&page_size=25&location_id=11101
		&mile_radius=${filters.milesRadius}&search_type=filtered&location_state=CA
	`)
}
