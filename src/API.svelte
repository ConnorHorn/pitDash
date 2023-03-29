<script>

    // predicted match times

    let ourMatchTimes = [];
    function getMatchTimes() {
        fetch(`https://www.thebluealliance.com/api/v3/event/2023rinsc/matches/simple`, {
            headers: {
                'X-TBA-Auth-Key': 'pds7XZnNTLstl6KszyGNrniVVTgLKG6FgeoaCS3f6Q9ZRjPGoBKfRtw4XN3rofPJ',
                'Accept': 'application/json'
            }
        }).then(response => response.json()).then(data => {
            console.log(data);
        });




    }

    function getStatbotics(){
        fetch('https://www.statbotics.io/api/rest/v2/event/2022cmptx').then(response => response.json()).then(data => {
            console.log(data);
        });
    }

  // getMatchTimes();
  getStatbotics();






</script>