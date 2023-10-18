<?php

namespace App\Helpers;


class ApiHandler {

    /**
     * The function is a PHP method that makes a HTTP request to an API endpoint with specified method,
     * headers, body, and authorization.
     * 
     * @param string method The HTTP method to be used for the API call (e.g., GET, POST, PUT, DELETE).
     * @param string baseAPI The `baseAPI` parameter is the base URL of the API endpoint you want to
     * call. It should be a string representing the URL of the API endpoint you want to interact with.
     * @param array headers An array of headers to be included in the request. Each header should be in
     * the format "Header-Name: Header-Value".
     * @param array body The `` parameter is an array that contains the data to be sent in the
     * request body. It is optional and can be set to `null` if there is no request body. If provided,
     * the data in the `` array will be encoded as JSON using `json_encode()` before
     * @param string auth The `auth` parameter is used to pass the authorization token for making
     * authenticated API requests. It is a string that represents the authorization token.
     * 
     * @return json of response from the API call as a decoded JSON array.
     */
    public function call(string $method, string $baseAPI, array $headers = null, array $body = null, string $auth = null) {
        $curl = curl_init();

        $authorization = '';
        if ($auth) {
            $authorization = "Authorization: " . $auth;
        }

        curl_setopt_array($curl, [
            CURLOPT_URL => $baseAPI,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => $method,
            CURLOPT_POSTFIELDS => $body ? json_encode($body, JSON_UNESCAPED_UNICODE) : '{}',
            CURLOPT_HTTPHEADER => [
                'Content-Type: application/json',
                $authorization
            ],
        ]);
        $response = curl_exec($curl);
        curl_close($curl);

        return json_decode($response, true);
    }
}
