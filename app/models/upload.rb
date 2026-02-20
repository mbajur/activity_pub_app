class Upload < ApplicationRecord
  include UploadFileUploader::Attachment(:file)
end
