class HttpClient {

    async get(url) {
        try {
          const response = await fetch(url);
          
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          
          return await response.json();
        } catch (error) {
          throw new Error('Failed to fetch data from server');
        }
      }
      
    async post(url, data) {
      try {
        const response = await fetch(url, {
          method: 'post',
          body: data
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        return await response.json();
      } catch (error) {
        throw new Error('Failed to fetch data from server');
      }
    }
  }
  
  export default HttpClient;
  