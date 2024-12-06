import React from 'react';
import './VideoGallery.css'; // CSS for styling

const VideoGallery = () => {
  return (
    <main className="video-gallery">
      <div className="container mt-5">
            <h1 className="text-center mb-4">Podcasts</h1>
            <div className="row">
                {/* Vidéo 1 */}
                <div className="col-md-6">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Florian Sevellec - Oona Layolle-001-SD</h5>
                            <video controls className="w-100">
                                <source src="public\Florian Sevellec - Oona Layolle-001-SD 480p.mov" type="video/mp4" />
                                Votre navigateur ne prend pas en charge l'élément vidéo.
                            </video>
                        </div>
                    </div>
                </div>
                {/* Vidéo 2 */}
                <div className="col-md-6">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Florian Sevellec-004-SD</h5>
                            <video controls className="w-100">
                                <source src="public\Florian Sevellec-004-SD 480p.mov" type="video/mp4" />
                                Votre navigateur ne prend pas en charge l'élément vidéo.
                            </video>
                        </div>
                    </div>
                </div>
                {/* Vidéo 3 */}
                <div className="col-md-6">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Frederic Le Moigne - Part 1-SD</h5>
                            <video controls className="w-100">
                                <source src="public\Frederic Le Moigne - Part 1-SD 480p.mov" type="video/mp4" />
                                Votre navigateur ne prend pas en charge l'élément vidéo.
                            </video>
                        </div>
                    </div>
                </div>
                {/* Vidéo 4 */}
                <div className="col-md-6">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Titre de la Vidéo 4</h5>
                            <video controls className="w-100">
                                <source src="public\Frederic Le Moigne - Part 2-SD 480p.mov" type="video/mp4" />
                                Votre navigateur ne prend pas en charge l'élément vidéo.
                            </video>
                        </div>
                    </div>
                </div>
                {/* Audio 1 */}
                <div className="col-md-6">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">PODCAST-AUDIO-Florian Sévellec</h5>
                            <audio controls className="w-100">
                                <source src="public\PODCAST-AUDIO-Florian Sévellec.m4a" type="audio/mpeg" />
                                Votre navigateur ne prend pas en charge l'élément audio.
                            </audio>
                        </div>
                    </div>
                </div>
                {/* Audio 2 */}
                <div className="col-md-6">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">PODCAST-AUDIO-Frédéric Le Moigne</h5>
                            <audio controls className="w-100">
                                <source src="public\PODCAST-AUDIO-Frédéric Le Moigne.m4a" type="audio/mpeg" />
                                Votre navigateur ne prend pas en charge l'élément audio.
                            </audio>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
};

export default VideoGallery;
