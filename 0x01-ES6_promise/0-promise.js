function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const response = {
	status: 200,
        body: 'photo-profile-1',
      };
      resolve(response);
    }, 1000);
   });
}
