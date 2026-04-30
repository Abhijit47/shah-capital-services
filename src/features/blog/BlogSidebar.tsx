import FadeInAdvanced from '#/components/elements/FadeInAdvanced'
import RecentPostImg1 from '/assets/images/blog/recent-post-img-1.jpg'
import RecentPostImg2 from '/assets/images/blog/recent-post-img-2.jpg'
import RecentPostImg3 from '/assets/images/blog/recent-post-img-3.jpg'

interface BlogSidebar {
  wrapper: string
  inner: string
}
const BlogSidebar: React.FC<BlogSidebar> = ({ wrapper, inner }) => {
  return (
    <div className={wrapper}>
      <div className={inner}>
        <FadeInAdvanced
          variant={'fadeInUp'}
          delay={100}
          className="sidebar__single sidebar__search"
        >
          <form
            className="sidebar__search-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="search" placeholder="Search..." />
            <button type="submit" title="Search">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </FadeInAdvanced>
        {/* Start Sidebar Single*/}
        <FadeInAdvanced
          variant={'fadeInUp'}
          delay={100}
          className="sidebar__single sidebar__category"
        >
          <h3 className="sidebar__title">Categories</h3>
          <ul className="sidebar__category-list list-unstyled">
            <li>
              <a href="#">
                New Technologies <span>(12)</span>
              </a>
            </li>
            <li className="active">
              <a href="#">
                Parallax Effect
                <span>(15)</span>
              </a>
            </li>
            <li>
              <a href="#">
                Digital Marketing <span>(08)</span>
              </a>
            </li>
            <li>
              <a href="#">
                Content Writting <span>(20)</span>
              </a>
            </li>
            <li>
              <a href="#">
                One Page Template <span>(14)</span>
              </a>
            </li>
            <li>
              <a href="#">
                Relationship Buildup <span>(05)</span>
              </a>
            </li>
          </ul>
        </FadeInAdvanced>
        {/* End Sidebar Single*/}

        {/* Start Sidebar Single*/}
        <FadeInAdvanced
          variant={'fadeInUp'}
          delay={100}
          className="sidebar__single sidebar__post"
        >
          <h3 className="sidebar__title">Recent Post</h3>
          <div className="sidebar__post-box">
            <div className="sidebar__post-single">
              <div className="sidebar-post__img">
                <img
                  src={RecentPostImg1}
                  width={350}
                  height={140}
                  alt="Image"
                />
              </div>
              <div className="sidebar__post-content-box">
                <h3>
                  <a href="#">
                    Regular maintenance cleaning or replacing air filters
                  </a>
                </h3>
              </div>
            </div>

            <div className="sidebar__post-single">
              <div className="sidebar-post__img">
                <img
                  src={RecentPostImg2}
                  width={350}
                  height={140}
                  alt="Image"
                />
              </div>
              <div className="sidebar__post-content-box">
                <h3>
                  <a href="#">
                    Water leakage can be due to a clogged drain line repaire
                  </a>
                </h3>
              </div>
            </div>

            <div className="sidebar__post-single">
              <div className="sidebar-post__img">
                <img
                  src={RecentPostImg3}
                  width={350}
                  height={140}
                  alt="Image"
                />
              </div>
              <div className="sidebar__post-content-box">
                <h3>
                  <a href="#">
                    Revitalising your people in to a retail downturn.
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </FadeInAdvanced>
        {/* End Sidebar Single*/}

        {/* Start Sidebar Single*/}
        <FadeInAdvanced
          variant={'fadeInUp'}
          delay={100}
          className="sidebar__single sidebar__tags"
        >
          <h3 className="sidebar__title">Tags Cloud</h3>
          <ul className="sidebar__tags-list clearfix list-unstyled">
            <li>
              <a href="#">Growth Accelerator</a>
            </li>
            <li>
              <a href="#">Management</a>
            </li>
            <li>
              <a href="#">Analysis</a>
            </li>
            <li>
              <a href="#">Planning</a>
            </li>
            <li>
              <a href="#">Solution</a>
            </li>
            <li>
              <a href="#">Advisory Service</a>
            </li>
          </ul>
        </FadeInAdvanced>
        {/* End Sidebar Single*/}
      </div>
    </div>
  )
}

export default BlogSidebar
