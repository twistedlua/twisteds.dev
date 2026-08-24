# TODO

## Deployment

- Enable GitHub Pages in the repository settings.
- Set the Pages source to **GitHub Actions**.
- Commit and push the updated deployment workflow.
- Confirm the workflow completes successfully.
- Configure the `twisteds.dev` custom domain.
- Add the required DNS records.
- Verify HTTPS is enabled.

## After `twisteds.dev` Goes Live

- Add `public/CNAME` containing `twisteds.dev`.
- Change the GitHub Actions `BASE_PATH` to `/`.
- Change canonical and Open Graph URLs back to `https://twisteds.dev/`.
- Change social preview image URLs back to the custom domain.
- Change `robots.txt` and every sitemap URL back to the custom domain.
- Change the README live-site link back to `https://twisteds.dev/`.
- Verify `/work`, `/about`, and `/contact` load directly.
- Verify Discord and X display the social preview image.
