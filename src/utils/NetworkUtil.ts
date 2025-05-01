import {APIResponse, httpStatusCodes} from "@customTypes/NetworkTypes";

/**
 * This function helps the api service functions to return
 * a standard result-object.
 *
 * @param error
 * @param httpStatusCode
 * @param message
 * @param data
 * @returns
 */
function buildResult(
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	error: any,
	httpStatusCode: httpStatusCodes,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	message: any,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data: any,
): APIResponse {
	// Ensure error is an instance of Error
	const normalizedError =
		error instanceof Error
			? error
			: new Error(error?.message || "Unknown error");

	return {
		error: normalizedError,
		httpStatusCode: httpStatusCode || null,
		message: message || null,
		data: data || null,
	};
}

const NetworkUtil = {
	buildResult,
};

export default NetworkUtil;
