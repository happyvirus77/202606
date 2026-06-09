import { Code2, Edit3, Eye, Heart, Images, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PortfolioCard({ student }) {
  const displayName = student.teamName || student.name;
  const isTeamProject = student.projectType === '팀 프로젝트';
  const galleryUrl = student.galleryUrl || student.deployUrl;

  return (
    <article className="portfolio-card fade-in">
      <div className="card-media">
        {student.videoUrl ? (
          <video src={student.videoUrl} poster={student.thumbnail} muted loop playsInline controls />
        ) : (
          <img src={student.thumbnail} alt={`${student.title} 대표 이미지`} />
        )}
        <div className="media-badge">{student.projectType}</div>
      </div>

      <div className="card-body">
        {isTeamProject ? (
          <div className="team-card-heading">
            <span>팀명</span>
            <strong>{displayName}</strong>
          </div>
        ) : (
          <div className="student-line">
            <div>
              <strong>{displayName}</strong>
              <span>{student.intro}</span>
            </div>
          </div>
        )}

        <div className="card-copy">
          {!isTeamProject && <p className="eyebrow">{student.category.join(' / ')}</p>}
          <h3>{student.title}</h3>
          <p>{student.description}</p>
        </div>

        {!isTeamProject && (
          <>
            <div className="skill-list">
              {student.skills.slice(0, 4).map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

            <div className="metric-row">
              <span>
                <Heart size={16} />
                {student.likes.toLocaleString()}
              </span>
              <span>
                <Eye size={16} />
                {student.views.toLocaleString()}
              </span>
            </div>
          </>
        )}

        <div className="card-actions">
          <a href={student.github} target="_blank" rel="noreferrer" className="icon-text-button">
            <Code2 size={16} />
            코드보기
          </a>
          <a href={student.deployUrl} target="_blank" rel="noreferrer" className="icon-text-button site-button">
            <Rocket size={16} />
            사이트
          </a>
          <a href={galleryUrl} target="_blank" rel="noreferrer" className="primary-button">
            <Images size={16} />
            갤러리
          </a>
        </div>

        <div className="admin-actions" aria-label="관리자 기능">
          <Link to={`/portfolio/${student.id}/edit`}>
            <Edit3 size={15} />
            수정
          </Link>
        </div>
      </div>
    </article>
  );
}
