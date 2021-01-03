class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :link
      t.text :content
      t.string :status
      t.string :platform
      t.timestamps
    end
  end
end
