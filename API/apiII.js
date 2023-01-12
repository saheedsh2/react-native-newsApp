api_key = "0adac99e5b056bb18ae958e1a3f9defa"
base_url = "https://saurav.tech/NewsAPI/"

// # Define any parameters for the API call
params = {
    "source": "bbc-news",
    "sortBy": "top",
    "apiKey": api_key
}

// # Send the API request
response = requests.get(base_url, params=params)

// # Print the response
print(response.json())