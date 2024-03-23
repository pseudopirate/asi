import AchievementItem from "./item"
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OIRYqROs3e6
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Achievements() {
  return (
    <div className="achievement-container">
      <AchievementItem
        title="Arctic Explorer"
        subtitle="For exploring the wonders of the Arctic and embracing sustainability."
        date="Acquired on February 14, 2023"
      />
      <AchievementItem
        title="Nature Enthusiast"
        subtitle="For appreciating the beauty of nature and promoting environmental awareness."
        date="Acquired on June 30, 2023"
      />
      <AchievementItem
        title="Sustainable Pioneer"
        subtitle="For leading the way in sustainable practices and innovation."
        date="Acquired on September 20, 2023"
      />
      <AchievementItem
        title="Forest Guide"
        subtitle="For guiding and preserving the natural wonders of the forest."
        date="Acquired on December 5, 2023"
      />
      <AchievementItem
        title="Northern Lights Seeker"
        subtitle="For chasing the mesmerizing beauty of the Northern Lights and sharing the experience with others."
        date="Acquired on March 10, 2023"
      />
    </div>
  );
};

