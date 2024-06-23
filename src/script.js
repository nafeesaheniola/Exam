<script>
     document.addEventListener("DOMContentLoaded", function () 
            const progressCircle = document.querySelector('.progress-circle');
            const percentage = 90;
            const radius = progressCircle.r.baseVal.value;
            const circumference = 2 * Math.PI * radius;
            progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
            progressCircle.style.strokeDashoffset = `${circumference}`;

            const offset = circumference - (percentage / 100) * circumference;
            progressCircle.style.strokeDashoffset = offset;
        );
</script>