<div class="btm-nav">
    <button on:click={handleEmailClick}>
        <img src="{base}/images/email.svg" alt="email" class = 'h-5 w-5' />
    </button>

    <button on:click={handleGithubClick}>
        <img src="{base}/images/github.svg" alt="github" class = 'h-5 w-5' />
    </button>

    <button on:click={handleLinkedInClick}>
        <img src="{base}/images/linkedin.svg" alt="linkedin" class = 'h-5 w-5' />
    </button>
  </div>


  <script>
    import { base } from "$app/paths";

    var handleEmailClick = () => {
      window.location.href = "mailto:tomalley24@gmail.com?subject=Hello%20saw%20your%20portfolio%20and%20to%20get%20in%20touch.";
    }

    var handleGithubClick = () => {
      window.open('https://github.com/tmallz', '_blank').focus();
    }

    var handleLinkedInClick = () => {
      window.open('https://www.linkedin.com/in/timothy-o-malley-b257bbb4/', '_blank').focus();
    }
  </script>