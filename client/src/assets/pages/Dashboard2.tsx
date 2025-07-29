import { useState } from 'react';

type ForumSection = 'main' | 'ingredients' | 'firstTime' | 'desserts';

// Sample data - replace with your actual data/API calls
const forumData = {
  main: [
    { id: 1, title: "Best Pasta Recipes", author: "Chef_Mike", replies: 23, lastPost: "2 hours ago" },
    { id: 2, title: "Healthy Breakfast Ideas", author: "HealthyEater", replies: 15, lastPost: "4 hours ago" },
    { id: 3, title: "Quick Dinner Solutions", author: "BusyMom", replies: 8, lastPost: "1 day ago" }
  ],
  ingredients: [
    { id: 4, title: "Amazing 3-Ingredient Cookies", author: "SimpleChef", replies: 12, lastPost: "1 hour ago" },
    { id: 5, title: "5-Minute Avocado Toast", author: "QuickEats", replies: 7, lastPost: "3 hours ago" }
  ],
  firstTime: [
    { id: 6, title: "Beginner's Guide to Baking", author: "BakeNewbie", replies: 31, lastPost: "30 minutes ago" },
    { id: 7, title: "My First Homemade Pizza", author: "FirstTimer", replies: 18, lastPost: "2 hours ago" }
  ],
  desserts: [
    { id: 8, title: "Chocolate Lava Cake Recipe", author: "SweetTooth", replies: 45, lastPost: "1 hour ago" },
    { id: 9, title: "No-Bake Cheesecake", author: "DessertLover", replies: 22, lastPost: "5 hours ago" }
  ],
  test : []
};

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('main');

  const handleSectionChange = (section: ForumSection) => {
    setActiveSection(section);
  };

  const getCurrentData = () => {
    switch(activeSection) {
      case 'main': return forumData.main;
      case 'ingredients': return forumData.ingredients;
      case 'firstTime': return forumData.firstTime;
      case 'desserts': return forumData.desserts;
      case 'test' : return forumData.test;
      default: return forumData.main;
    }
  };

  const getSectionTitle = () => {
    switch(activeSection) {
      case 'main': return 'Main Forum';
      case 'ingredients': return '5 Ingredients or Less';
      case 'firstTime': return 'First Time Recipes';
      case 'desserts': return 'Desserts';
      case 'test' : return 'Test';
      default: return 'Main Forum';
    }
  };

  return (
    <div className="d-flex">
      <section className='dashboard-menu bg-light' style={{width: '250px', minHeight: '100vh'}}>
        <nav className="nav flex-column p-3">
          <button 
            className={`nav-link text-start ${activeSection === 'main' ? 'active' : ''}`}
            onClick={() => handleSectionChange('main')}
            style={{border: 'none', background: 'none'}}
          >
            Main
          </button>
          <button 
            className={`nav-link text-start ${activeSection === 'ingredients' ? 'active' : ''}`}
            onClick={() => handleSectionChange('ingredients')}
            style={{border: 'none', background: 'none'}}
          >
            5 Ingredients or Less
          </button>
          <button 
            className={`nav-link text-start ${activeSection === 'firstTime' ? 'active' : ''}`}
            onClick={() => handleSectionChange('firstTime')}
            style={{border: 'none', background: 'none'}}
          >
            First Time Recipes
          </button>
          <button 
            className={`nav-link text-start ${activeSection === 'desserts' ? 'active' : ''}`}
            onClick={() => handleSectionChange('desserts')}
            style={{border: 'none', background: 'none'}}
          >
            Desserts
          </button>
          <button 
            className={`nav-link text-start ${activeSection === 'test' ? 'active' : ''}`}
            onClick={() => handleSectionChange('test')}
            style={{border: 'none', background: 'none'}}
          >
            Test
          </button>
        </nav>
      </section>

      <main className="flex-grow-1 p-4">
        <h2 className="mb-4">{getSectionTitle()}</h2>
        
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">Recent Discussions</h5>
              </div>
              <div className="card-body">
                {getCurrentData().length > 0 ? (
                  <div className="list-group list-group-flush">
                    {getCurrentData().map((post) => (
                      <div key={post.id} className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">{post.title}</div>
                          <small className="text-muted">by {post.author}</small>
                        </div>
                        <div className="text-end">
                          <span className="badge bg-primary rounded-pill">{post.replies} replies</span>
                          <br />
                          <small className="text-muted">{post.lastPost}</small>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted">No posts in this category yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <button className="btn btn-primary">
            <i className="fas fa-plus me-2"></i>
            New Post
          </button>
        </div>
      </main>
    </div>
  );
}