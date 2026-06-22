import React, { useState, useRef } from 'react';
import { Lock, Plus, Trash2, ShieldCheck, LogOut, CheckCircle, Image as ImageIcon, Camera, UploadCloud, Edit2, X } from 'lucide-react';
import { useStore } from '../store';

export function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { courses, addCourse, updateCourse, deleteCourse, coachPhoto, setCoachPhoto } = useStore();
  const [successMsg, setSuccessMsg] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [newCourse, setNewCourse] = useState({
    title: '',
    description: '',
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Chukwuyem291@') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  const handleAddOrUpdateCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      updateCourse(editingId, {
        id: editingId,
        title: newCourse.title,
        description: newCourse.description,
        isCustom: courses.find(c => c.id === editingId)?.isCustom || false
      });
      setSuccessMsg('Course successfully updated!');
    } else {
      const id = newCourse.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      addCourse({
        id,
        title: newCourse.title,
        description: newCourse.description,
        isCustom: true
      });
      setSuccessMsg('Course successfully published!');
    }
    setNewCourse({ title: '', description: '' });
    setEditingId(null);
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleEditCourse = (course: any) => {
    setNewCourse({
      title: course.title,
      description: course.description,
    });
    setEditingId(course.id);
  };

  const cancelEdit = () => {
    setNewCourse({ title: '', description: '' });
    setEditingId(null);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { // 2MB limit
        alert('File size too large. Please upload an image smaller than 2MB.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoachPhoto(reader.result as string);
        setSuccessMsg('Photo uploaded successfully!');
        setTimeout(() => setSuccessMsg(''), 3000);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md border border-gray-100 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-[#0A2342]" />
          <div className="mx-auto w-16 h-16 bg-[#0A2342]/5 rounded-full flex items-center justify-center mb-6">
            <Lock className="h-8 w-8 text-[#0A2342]" />
          </div>
          <h2 className="text-2xl font-bold text-[#0A2342] mb-2">Admin Access</h2>
          <p className="text-gray-500 mb-8 mt-2 text-sm">Please enter the dashboard password to continue.</p>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A2342] text-center tracking-widest bg-gray-50"
                placeholder="•••••••••••"
              />
              {error && <p className="text-red-500 text-sm mt-3 font-medium">{error}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-[#0A2342] hover:bg-[#11315c] text-white font-bold py-4 rounded-lg transition-colors flex justify-center items-center gap-2"
            >
              Verify Access
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Admin Header */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-[#0A2342] p-8 rounded-3xl shadow-lg mb-10 text-white">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
             <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <ShieldCheck className="h-6 w-6 text-[#4DA6FF]" />
             </div>
             <div>
               <h1 className="text-2xl font-bold">Admin Dashboard</h1>
               <p className="text-[#4DA6FF] font-medium text-sm">Welcome back, Coach Clement</p>
             </div>
          </div>
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="flex items-center gap-2 px-6 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm font-semibold"
          >
            <LogOut className="h-4 w-4" /> Secure Logout
          </button>
        </div>

        {successMsg && (
          <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg flex items-center gap-2 text-sm font-medium border border-green-200 shadow-sm max-w-lg mx-auto">
            <CheckCircle className="h-5 w-5" /> {successMsg}
          </div>
        )}

        {/* Coach Photo Upload Section */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mb-10 max-w-lg">
           <h2 className="text-xl font-bold text-[#0A2342] mb-6 flex items-center gap-2">
            <Camera className="h-5 w-5 text-[#4DA6FF]" /> Manage Profile Photo
          </h2>
          <div className="flex items-center gap-6">
             <div className="relative w-24 h-24 rounded-full border-4 border-gray-100 overflow-hidden bg-gray-50 flex items-center justify-center shrink-0 shadow-inner">
               {coachPhoto ? (
                 <img src={coachPhoto} alt="Coach Photo" className="w-full h-full object-cover" />
               ) : (
                 <ImageIcon className="h-8 w-8 text-gray-300" />
               )}
             </div>
             <div className="flex-1">
               <p className="text-sm text-gray-500 mb-4">Upload a professional photo to appear on the Home and Navigation bar. (Max 2MB)</p>
               <div className="flex gap-3">
                 <input 
                   type="file" 
                   accept="image/*" 
                   className="hidden" 
                   ref={fileInputRef} 
                   onChange={handlePhotoUpload} 
                 />
                 <button 
                   onClick={() => fileInputRef.current?.click()}
                   className="flex items-center gap-2 px-4 py-2 bg-[#0A2342] text-white text-sm font-medium rounded-lg hover:bg-[#11315c] transition-colors"
                 >
                   <UploadCloud className="h-4 w-4" /> Upload New Photo
                 </button>
                 {coachPhoto && (
                   <button 
                     onClick={() => {
                        if (confirm('Remove photo?')) setCoachPhoto(null);
                     }}
                     className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 text-sm font-medium rounded-lg hover:bg-red-100 transition-colors"
                   >
                     Remove
                   </button>
                 )}
               </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Upload / Edit Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 sticky top-28">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-[#0A2342] flex items-center gap-2">
                  {editingId ? <Edit2 className="h-5 w-5 text-[#4DA6FF]" /> : <Plus className="h-5 w-5 text-[#4DA6FF]" />}
                  {editingId ? 'Edit Course' : 'Add New Course'}
                </h2>
                {editingId && (
                  <button onClick={cancelEdit} className="p-1 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 transition-colors">
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>

              <form onSubmit={handleAddOrUpdateCourse} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Course Title</label>
                  <input
                    type="text"
                    required
                    value={newCourse.title}
                    onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4DA6FF] bg-gray-50"
                    placeholder="e.g. Master Copywriting"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Course Description</label>
                  <textarea
                    required
                    rows={4}
                    value={newCourse.description}
                    onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4DA6FF] bg-gray-50"
                    placeholder="Describe what students will learn..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#4DA6FF] hover:bg-[#338be6] text-white font-bold py-4 rounded-lg transition-colors mt-2 shadow-lg shadow-[#4DA6FF]/20"
                >
                  {editingId ? 'Update Course' : 'Publish Course'}
                </button>
              </form>
            </div>
          </div>

          {/* Course List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-[#0A2342] mb-6">Manage Training Programs</h2>
              
              <div className="space-y-4">
                {courses.length === 0 ? (
                  <p className="text-gray-500 text-center py-10">No courses available.</p>
                ) : (
                  courses.map((course) => (
                    <div key={course.id} className="border border-gray-100 rounded-xl p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-gray-200 transition-colors">
                      <div className="flex-1 pr-4">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-gray-900">{course.title}</h3>
                          {course.isCustom && (
                             <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold uppercase rounded">Uploaded</span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 line-clamp-1">{course.description}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => handleEditCourse(course)}
                          className="p-2.5 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Edit Course"
                        >
                          <Edit2 className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => {
                            if(confirm(`Are you sure you want to delete ${course.title}?`)) {
                              deleteCourse(course.id);
                            }
                          }}
                          className="p-2.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete Course"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
