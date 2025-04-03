import { BaseResponse } from '@/src/types/api/base'

const _prefix = '/api'

export const ENDPOINTS = {
	samples: {
		list: `${_prefix}/samples`,
		detail: (id: BaseResponse['id']) => `${_prefix}/samples/${id}`,
	},
}
