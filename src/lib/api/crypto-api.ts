/**
 * Fetches cryptocurrency market data from CoinGecko API
 * @param page - Page number for pagination
 * @param perPage - Number of results per page
 * @returns Array of coin market data
 */
export async function fetchCoinMarkets(page: number = 1, perPage: number = 50) {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false&locale=en`,
      { next: { revalidate: 300 } } // Cache for 5 minutes
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch coin markets');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error while fetching coin markets:', error);
    return [];
  }
}

/**
 * Fetches detailed data for a specific coin
 * @param coinId - The ID of the coin to fetch
 * @returns Detailed coin data
 */
export async function fetchCoinDetails(coinId: string) {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
      { next: { revalidate: 300 } } // Cache for 5 minutes
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch details for coin: ${coinId}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching coin details for ${coinId}:`, error);
    return null;
  }
}

/**
 * Fetches historical price data for a specific coin
 * @param coinId - The ID of the coin to fetch
 * @param days - Number of days of data to fetch
 * @returns Historical price data
 */
export async function fetchCoinHistory(coinId: string, days: number = 30) {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch history for coin: ${coinId}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching coin history for ${coinId}:`, error);
    return null;
  }
}

/**
 * Fetches trending coins from CoinGecko API
 * @returns Array of trending coins
 */
export async function fetchTrendingCoins() {
  try {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/search/trending',
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch trending coins');
    }
    
    const data = await response.json();
    return data.coins;
  } catch (error) {
    console.error('Error fetching trending coins:', error);
    return [];
  }
} 